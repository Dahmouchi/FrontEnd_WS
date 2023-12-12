import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import "./product.css";
export const Product = ({ id, name, price, onAddToCart, pic, desc, qnt }) => {
  const { cart } = useContext(CartContext);
  const existingProduct = cart.find((item) => item.id === id);
  const productCount = existingProduct ? existingProduct.quantity : 0;
  return (
    <div key={id} className="product">
      {/* remeber to add the others props*/}
      <div class="wrapper">
        <div class="container">
          <div class="top">
            {" "}
            <img src={pic} alt="product" />
          </div>
          <div class="bottom">
            <div className="lefts">
              <div class="details">
                <h1>{name}</h1>
                Add to Cart {productCount > 0 && <span>({productCount})</span>}
                <p>£{price}</p>
              </div>
              <div class="buy" onClick={() => onAddToCart({ id })}>
                <i class="material-icons">
                  <FontAwesomeIcon
                    icon={faCartPlus}
                    style={{ width: "50px", height: "50px" }}
                  />
                </i>
              </div>
            </div>
          </div>
        </div>
        <div class="inside">
          <div class="icon">
            <FontAwesomeIcon
              icon={faCircleInfo}
              style={{ width: "25px", height: "25px" }}
            />
          </div>
          <div class="contents">
            <table>
              <tr>
                <th>Title</th>
              </tr>
              <tr>
                <td>{name}</td>
              </tr>
              <tr>
                <th>Description</th>
              </tr>
              <tr>
                <td>{desc}</td>
              </tr>
              <tr>
                <th>Price</th>
              </tr>
              <tr>
                <td>{price}</td>
              </tr>
              <tr>
                <th>Stock quantity</th>
              </tr>
              <tr>
                <td>{qnt}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
