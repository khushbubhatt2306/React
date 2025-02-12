import axios from "axios";
import React, { useEffect, useState } from "react";

function UseCard() {
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      setProduct(res.data);
    } catch (error) {
      console.log("Data Error", error);
    }
  };

  return (
    <div className="container">
      <h1>Product Data</h1>

      <div className="row">
        {Product &&
          Product.map((Product, index) => {
            console.log(Product);
            return (
              <div className="col-md-4" key={index}>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={Product.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{Product.id}</h5>
                    <h5 className="card-title">{Product.title}</h5>
                    <p className="card-text">{Product.description}</p>
                    <h5 className="card-title">{Product.price}</h5>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default UseCard;
