import styled from "styled-components";

import * as services from "../../data/fakeProductService";
import { useEffect, useState } from "react";

export const Sale = () => {
  const [products, setProducts] = useState<services.IProducts[]>([]);

  useEffect(() => {
    setProducts(services.getMovies());
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <img src={product.photo} alt={product.name} />
        </div>
      ))}
    </div>
  );
};
