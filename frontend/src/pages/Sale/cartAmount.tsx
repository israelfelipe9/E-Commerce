import React from "react";

import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
          <FontAwesomeIcon icon={faMinus} size="sm" flip="both" />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <FontAwesomeIcon icon={faPlus} size="sm" flip="both" />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
