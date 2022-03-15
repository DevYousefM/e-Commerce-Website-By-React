import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action/index";
import { delCart } from "../redux/action";

export default function Cart() {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const delProduct = (product) => {
    dispatch(delCart(product));
  };

  const products = (product) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4 d-flex justify-content-center">
              <img
                src={product.image}
                alt={product.title}
                width="250px"
                height="250px"
              />
            </div>
            <div className="col-md-4">
              <h3>{product.title}</h3>
              <p className="lead fw-bolder">
                {product.qty} x ${product.price} = $
                {product.qty * product.price}
              </p>

              <button
                className="btn btn-outline-dark"
                onClick={() => addProduct(product)}
              >
                +
              </button>
              <button
                className="btn btn-outline-dark ms-3"
                onClick={() => delProduct(product)}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <>{state.length !== 0 && state.map(products)}</>;
}
