import React from "react";
import { Plus, Minus, X } from "phosphor-react";
// Plus Icon
const PlusIcon = () => <Plus size={20} color="blue" />;

// Minus Icon
const MinusIcon = () => <Minus size={20} color="red" />;

// Cross Icon
const CrossIcon = () => <X size={20} color="black" />;
export const CartItem = ({
  id,
  quantity,
  name,
  onUpdateQuantity,
  onRemove,
  price,
  pic,
}) => {
  return (
    <div>
      <center>
        <img
          src={pic}
          alt="product"
          style={{ width: "200px", height: "150px" }}
        />
      </center>
      <div>
        <p>
          {name} &nbsp;&nbsp;&nbsp;&nbsp; price:{price}$ ({quantity})
        </p>

        <button
          className="cartbtn"
          onClick={() => onUpdateQuantity(id, quantity - 1)}
          disabled={quantity === 1}
        >
          <MinusIcon />
        </button>

        <button
          className="cartbtn"
          onClick={() => onUpdateQuantity(id, quantity + 1)}
        >
          <PlusIcon />
        </button>
        <button className="cartbtn" onClick={() => onRemove(id)}>
          <CrossIcon />
        </button>
      </div>
    </div>
  );
};
