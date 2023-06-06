import "./productStyle.css";

import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3 mt-2">
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img
              src={product.photo}
              className="card-img img-fluid"
              width="96"
              height="350"
              alt=""
            />
          </div>
        </div>
        <div className="card-body bg-light text-center">
          <div className="mb-2">
            <h6 className="font-weight-semibold mb-2">
              <a href="#" className="text-default mb-2" data-abc="true">
                {product.name}
              </a>
            </h6>

            <a href="#" className="text-muted" data-abc="true">
              Sunglasses
            </a>
          </div>

          <h3 className="mb-0 font-weight-semibold">R$ {product.price}</h3>

          <button
            type="button"
            className="btn btn-warning mt-2 text-white"
            onClick={() => console.log("clicou")}
          >
            <FontAwesomeIcon icon={faBagShopping} size="xl" fixedWidth />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
