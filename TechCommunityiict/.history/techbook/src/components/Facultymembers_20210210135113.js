import React, { useState, useEffect } from "react";
import Axios from "axios";

function Facultymembers() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "https://60238a7b6bf3e6001766b33f.mockapi.io/iictteachersinfo"
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
        <p key={product.userId}>{product.name}</p>
      ))}
    </div>
  );
}

export default Facultymembers;
