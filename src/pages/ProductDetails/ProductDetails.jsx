// import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      baseURL: "https://fakestoreapi.com",
      url: "/products/",
    })
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => console.dir(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h1>Fake Shop API response:</h1>
      {loading && "Loading..."}
      {!!data && data.length > 0 ? (
        data.map((product) => {
          return (
            <article key={product.id}>
              <div className="flex">
                PRODUCT DETAIL PAGE
              </div>
              
            </article>
          );
        })
      ) : (
        <p>API did not provided any product, try again.</p>
      )}
    </section>
  );
}
export default ProductDetails