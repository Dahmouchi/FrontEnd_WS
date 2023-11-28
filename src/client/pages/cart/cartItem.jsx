import React from "react";

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
            <center><img src={pic} alt="product" style={{width:"200px",height:"150px"}}/></center>
            <p>
                {name} &nbsp;&nbsp;&nbsp;&nbsp; price:{price}$ ({quantity})
            </p>
            <button
                className="cartbtn"
                onClick={() => onUpdateQuantity(id, quantity - 1)}
                disabled={quantity === 1}
            >
                Decrease Quantity
            </button>
            <button
                className="cartbtn"
                onClick={() => onUpdateQuantity(id, quantity + 1)}
            >
                Increase Quantity
            </button>
            <button className="cartbtn" onClick={() => onRemove(id)}>
                Remove Item
            </button>
        </div>
    );
};
