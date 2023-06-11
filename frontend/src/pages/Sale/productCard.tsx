import './productStyle.css'

import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3 mt-2">
      <div className="card">
        <div className="card-body">
          <div className="card-img-actions">
            <img
              src={product.photo[0].url}
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
              <Link to={`/sale/${product._id}`}>{product.name}</Link>
            </h6>

            <a href="#" className="text-muted" data-abc="true">
              Sunglasses
            </a>
          </div>

          <h3 className="mb-0 font-weight-semibold">R$ {product.price}</h3>

          <Link to={`/sale/${product._id}`}>
            <button
              type="button"
              className="btn btn-warning mt-2 text-white"
              onClick={() => console.log("clicou")}
            >
              <FontAwesomeIcon icon={faBagShopping} size="xl" fixedWidth />
              Purchase
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
