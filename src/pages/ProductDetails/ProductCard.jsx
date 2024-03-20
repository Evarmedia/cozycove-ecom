import { useEffect, useState } from "react";
import axios from "axios";

function ProductCard() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      baseURL: "https://fakestoreapi.com",
      url: "/products/id",
    })
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => console.dir(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h1>API response:</h1>
      {loading && "Loading..."}
      {!!data && data.length > 0 ? (
        data.map((product) => {
          return (
            <article key={product.id}>
              <div className="flex">
                <img src={product.image} alt="poduct image" />
                <h2>name: {product.title}</h2>
                <p>id: {product.id}</p>
                <p>description: {product.description}</p>
                <p>brand: {product.brand}</p>
                <p>price: {product.price}</p>
                <p>category: {product.category}</p>
              </div>
              
            </article>
          );
        })
      ) : (
        <p>Please wait...</p>
      )}
    </section>
  );
}

export default ProductCard;