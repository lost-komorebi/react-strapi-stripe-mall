import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import.meta.env;
import { useDispatch } from "react-redux";
import { addToCart } from "../../cartReducer";

const Product = () => {
  const conf = {
    uploadUrl: import.meta.env.VITE_API_UPLOAD_URL,
  };
  const id = +useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const dispatch = useDispatch();
  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={conf.uploadUrl + data.attributes?.img?.data.attributes.url}
                alt=""
                onClick={() => {
                  setSelectedImg("img");
                }}
              />
              <img
                src={
                  conf.uploadUrl + data.attributes?.img2?.data.attributes.url
                }
                alt=""
                onClick={() => {
                  setSelectedImg("img2");
                }}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  conf.uploadUrl +
                  data?.attributes?.[selectedImg].data.attributes.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data.attributes?.title}</h1>
            <span>${data.attributes?.price}</span>
            <p>{data.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes?.title,
                    price: data.attributes?.price,
                    desc: data.attributes?.desc,
                    img:
                      conf.uploadUrl +
                      data?.attributes?.[selectedImg].data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartOutlinedIcon /> Add To Cart
            </button>
            <div className="link">
              <div className="item">
                <FavoriteBorderOutlinedIcon /> Add To Wish List
              </div>
              <div className="item">
                <BalanceIcon /> Add To Compare
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
