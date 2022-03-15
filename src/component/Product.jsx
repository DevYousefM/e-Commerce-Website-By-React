import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import ContentLoader from "react-content-loader";

const Product = () => {
  let { state } = useLocation();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const getProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${state}`);
    setProduct(await res.json());
    setLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, [state]);

  const Loading = () => {
    return (
      <>
        <div>
          <ContentLoader
            speed={2}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="8" rx="3" ry="3" width="400" height="1000" />
            <rect x="0" y="26" rx="3" ry="3" width="400" height="1000" />
          </ContentLoader>
        <ContentLoader
            speed={2}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
            <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
            <rect x="48" y="56" rx="3" ry="3" width="410" height="6" />
            <rect x="48" y="72" rx="3" ry="3" width="380" height="6" />
            <rect x="48" y="88" rx="3" ry="3" width="178" height="6" />
          </ContentLoader>
        </div>
        <div>
          <ContentLoader
            speed={2}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="8" rx="3" ry="3" width="400" height="1000" />
            <rect x="0" y="26" rx="3" ry="3" width="400" height="1000" />
          </ContentLoader>
          <ContentLoader
            speed={2}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
            <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
            <rect x="48" y="56" rx="3" ry="3" width="410" height="6" />
            <rect x="48" y="72" rx="3" ry="3" width="380" height="6" />
            <rect x="48" y="88" rx="3" ry="3" width="178" height="6" />
          </ContentLoader>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400x"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star mx-2"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => {
              addProduct(product);
            }}
          >
            Add to Cart
          </button>
          <NavLink to="/cart" className="btn btn-dark px-4 py-2 ms-3">
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container pt-5">
        <div className="row align-items-center">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};
export default Product;
