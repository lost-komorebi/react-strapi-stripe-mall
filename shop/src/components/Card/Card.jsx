import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
import.meta.env;
const Card = (props) => {
  const conf = {
    uploadUrl: import.meta.env.VITE_API_UPLOAD_URL,
  };
  return (
    <Link to={`/product/${props.item.id}`} className="link">
      <div className="card">
        <div className="image">
          {props.item.attributes.isNew && <span>New Season</span>}
          <img
            src={conf.uploadUrl + props.item.attributes.img.data.attributes.url}
            alt=""
            className="mainImg"
          />
          <img
            src={
              conf.uploadUrl + props.item.attributes.img2.data.attributes.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{props.item.attributes.title}</h2>
        <div className="prices">
          <h3>
            $
            {props.item.attributes.oldPrice || props.item.attributes.price + 20}
          </h3>
          <h3>${props.item.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
