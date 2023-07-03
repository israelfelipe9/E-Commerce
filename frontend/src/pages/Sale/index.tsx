import { useEffect, useState } from "react";
import { ProductCard } from "./productCard";

import * as services from "../../data/fakeProductService";

export const Sale = () => {
  const [products, setProducts] = useState<services.IProducts[]>([]);

  useEffect(() => {
    setProducts(services.getMovies());
  }, []);

  return (
    <div className="container d-flex justify-content-center mt-50 mb-50">
      <div className="row">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};
