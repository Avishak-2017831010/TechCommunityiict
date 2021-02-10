import React, { useState, useEffect } from "react";

import Axios from "axios";

function Facultymembers() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    const products = data;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
}

export default Facultymembers;
