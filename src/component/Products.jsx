import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContentLoader from "react-content-loader";

const Products = () => {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([data]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");

      if (componentMounted) {
        setData(await res.clone().json());
        setFilter(await res.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div className="d-flex justify-content-center flex-column align-items-center">
        <div>
          <ContentLoader
            speed={2}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="25" y="8" rx="3" ry="3" width="400" height="400" />
            <rect x="25" y="26" rx="3" ry="3" width="400" height="400" />
          </ContentLoader>
          <ContentLoader
            speed={2}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="25" y="8" rx="3" ry="3" width="400" height="400" />
            <rect x="25" y="26" rx="3" ry="3" width="400" height="400" />
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
            <rect x="25" y="8" rx="3" ry="3" width="400" height="400" />
            <rect x="25" y="26" rx="3" ry="3" width="400" height="400" />
          </ContentLoader>
          <ContentLoader
            speed={2}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="25" y="8" rx="3" ry="3" width="400" height="400" />
            <rect x="25" y="26" rx="3" ry="3" width="400" height="400" />
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
            <rect x="25" y="8" rx="3" ry="3" width="400" height="400" />
            <rect x="25" y="26" rx="3" ry="3" width="400" height="400" />
          </ContentLoader>
          <ContentLoader
            speed={2}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="25" y="8" rx="3" ry="3" width="400" height="400" />
            <rect x="25" y="26" rx="3" ry="3" width="400" height="400" />
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
            <rect x="25" y="8" rx="3" ry="3" width="400" height="400" />
            <rect x="25" y="26" rx="3" ry="3" width="400" height="400" />
          </ContentLoader>
          <ContentLoader
            speed={2}
            width={400}
            height={160}
            viewBox="0 0 400 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="25" y="8" rx="3" ry="3" width="400" height="400" />
            <rect x="25" y="26" rx="3" ry="3" width="400" height="400" />
          </ContentLoader>
        </div>
      </div>
    );
  };

  const filterProduct = (cate) => {
    const updatedList = data.filter((item) => item.category === cate);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark"
            onClick={() => {
              setFilter(data);
            }}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark ms-2"
            onClick={() => {
              filterProduct("men's clothing");
            }}
          >
            Men's Clothes
          </button>
          <button
            className="btn btn-outline-dark ms-2"
            onClick={() => {
              filterProduct("women's clothing");
            }}
          >
            Women's Clothes
          </button>
          <button
            className="btn btn-outline-dark ms-2"
            onClick={() => {
              filterProduct("jewelery");
            }}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark ms-2"
            onClick={() => {
              filterProduct("electronics");
            }}
          >
            Electronic
          </button>
        </div>
        {filter.map((product) => {
          if (product.title) {
            product.title = product.title.substring(0, 12);
          }
          let id = product.id;
          return (
              <div className="col-md-3 mb-4" key={Math.random()}>
                <div className="card h-100 text-center p-4" >
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">{product.title}...</h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <button
                      to={`/products/singleproduct/${id}`}
                      className="btn btn-outline-dark"
                      onClick={(item) => {
                        navigate("/products/singleproduct", {
                          state: product.id,
                        });
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};
export default Products;
