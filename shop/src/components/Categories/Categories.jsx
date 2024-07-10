import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";
import.meta.env;
import useFetch from "../../hooks/useFetch";
const Categories = () => {
  const conf = {
    uploadUrl: import.meta.env.VITE_API_UPLOAD_URL,
  };

  // populate=* 返回所有内容包含图片 关系
  const url = `/sub-categories?populate=*`;
  const { data, loading, error } = useFetch(url);
  return (
    <div className="categories">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="col">
            <div className="row">
              <img
                src={conf.uploadUrl + data[0]?.attributes?.img.data.attributes.url}
                alt=""
              />
              <button>
                <Link to="products/1" className="link">
                  {data[0]?.attributes?.title}
                </Link>
              </button>
            </div>

            <div className="row">
              <img
                src={conf.uploadUrl + data[1]?.attributes?.img.data.attributes.url}
                alt=""
              />
              <button>
                <Link to="products/1" className="link">
                {data[1]?.attributes?.title}
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src={conf.uploadUrl + data[2]?.attributes?.img.data.attributes.url}
                alt=""
              />
              <button>
                <Link to="products/1" className="link">
                {data[2]?.attributes?.title}
                </Link>
              </button>
            </div>
          </div>
          <div className="col col-l">
            <div className="row">
              <div className="col">
                <div className="row">
                  <img
                    src={conf.uploadUrl + data[3]?.attributes?.img.data.attributes.url}
                    alt=""
                  />
                  <button>
                    <Link to="products/1" className="link">
                    {data[3]?.attributes?.title}
                    </Link>
                  </button>
                </div>
              </div>
              <div className="row">
                <img
                  src={conf.uploadUrl + data[4]?.attributes?.img.data.attributes.url}
                  alt=""
                />
                <button>
                  <Link to="products/1" className="link">
                  {data[4]?.attributes?.title}
                  </Link>
                </button>
              </div>
            </div>
            <div className="row">
              <img
                src={conf.uploadUrl + data[5]?.attributes?.img.data.attributes.url}
                alt=""
              />
              <button>
                <Link to="products/1" className="link">
                {data[5]?.attributes?.title}
                </Link>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Categories;
