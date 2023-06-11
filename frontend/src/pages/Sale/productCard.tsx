import "./productStyle.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext, type ProductProps } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

export const ProductCard = ({ product }: { product: ProductProps }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="col-md-3 mt-2">
      <div className="card border">
        <div className="card-body">
          <div className="card-img-actions">
            <img
              src={product.photo[0].url}
              className="img-fluid"
              width="150"
              height="350"
              alt=""
            />
          </div>
        </div>
        <div className="card-body bg-light text-center">
          <div className="mb-2">
            <h6 className="font-weight-semibold mb-2">
              <Link to={`/sale/${product._id}`}>{product.name}</Link>
            </h6>

            <a href="#" className="text-muted" data-abc="true">
              Sunglasses
            </a>
          </div>

          <h3 className="mb-0 font-weight-semibold">R$ {product.price}</h3>

          <button
            type="button"
            className="btn btn-warning mt-2 text-white"
            onClick={() => addToCart(product)}
          >
            <FontAwesomeIcon icon={faCartShopping} fixedWidth />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
