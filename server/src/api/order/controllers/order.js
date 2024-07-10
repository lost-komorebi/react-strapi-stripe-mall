"use strict";

const stripe = require("stripe")(process.env.STRIPE_API_KEY);

/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController("api::order.order");
module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { cardProducts } = ctx.request.body;
    try {
      const lineItems = await Promise.all(
        cardProducts.products.map(async (product) => {
          // Fetch product details from Strapi
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: product.quantity,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ["US", "CA"] },
        payment_method_types: ["card"],
        mode: "payment",
        success_url: process.env.SUCCESS_URL,
        cancel_url: process.env.CANCEL_URL,
        line_items: lineItems,
      });

      // Save order details in Strapi
      await strapi
        .service("api::order.order")
        .create({ data: { products: cardProducts, stripeId: session.id } });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return { error: error.message };
    }
  },
}));
