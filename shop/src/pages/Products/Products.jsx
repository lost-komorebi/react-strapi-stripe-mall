import React, { useState } from "react";
import "./Products.scss";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const catId = +useParams().id;
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleChange = (e) => {
    // 当前类别被选中则加入，否则从数组中删除
    setSelectedCategories((prev) =>
      e.target.checked
        ? [...prev, +e.target.value]
        : prev.filter((item) => item != +e.target.value)
    );
  };

  const url = `/sub-categories?[filters][categories][id][$eq]=${catId}`;
  const { data, loading, error } = useFetch(url);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                onChange={handleChange}
                value={item.id}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              id="3"
              min={0}
              max={1000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              name="price"
              value="asc"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              name="price"
              value="desc"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="catImg"
        />
        {/* 将查询条件传给List */}
        <List
          catId={catId}
          sort={sort}
          maxPrice={maxPrice}
          cate={selectedCategories}
        />
      </div>
    </div>
  );
};

export default Products;
