import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import.meta.env;
import useFetch from "../../hooks/useFetch";
const FeaturedProducts = (props) => {
  const conf = {
    apiToken: import.meta.env.VITE_API_TOKEN,
    apiUrl: import.meta.env.VITE_API_URL,
  };
  // populate=* 返回所有内容包含图片 关系
  const url = `/products?populate=*&[filters][type][$eq]=${props.type.toLowerCase()}`;
  const { data, loading, error } = useFetch(url);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1> {props.type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quod unde
          officia, cumque quae aperiam quibusdam fugit autem perferendis minima
          eos veniam corrupti mollitia a! Quis libero distinctio nam nesciunt.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
