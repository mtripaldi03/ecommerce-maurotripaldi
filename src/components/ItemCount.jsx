import { useState } from "react";
import './styles/ItemCount.css';
const ItemCount = ({ stock = 7, initial = 0, onAdd }) => {
  const [count, setCount] = useState(initial);
  const updateCount = (op) => {
    if (op === "-" && count > 0) {
      setCount(count - 1);
    }
    if (op === "+" && count < stock) {
      setCount(count + 1);
    }
  };
  const updateCountInput = (e) => {
    const { value } = e.target;
    if (value <= stock) {
      setCount(isNaN(value) ? 0 : parseInt(value));
    }
  };
  return (
    <>
      <div className="input-group input-spinner mb-3 d-flex justify-content-center">
      <button
          onClick={() => updateCount("-")}
          className="btn btn-icon btn-primary"
          type="button"
          disabled={count === "" || count === 0}
        >
          -
        </button>
        
        <input
          onChange={(e) => updateCountInput(e)}
          className="border-dark"
          placeholder=""
          value={count}
          type="number"
        />
        
        <button
          onClick={() => updateCount("+")}
          className="btn btn-icon btn-primary"
          type="button"
          disabled={stock === count}
          
        >
          +
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <button
          onClick={() => onAdd(count)}
          type="button"
          className="btn btn-info"
          disabled={count === "" || count === 0}
        >
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ItemCount;