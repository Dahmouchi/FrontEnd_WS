import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Product } from "./product";
import { CartContext } from "../context/cartContext";
import "./shop.css";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import bg from '../../../images/bg.jpg'

export const Shop = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    // Fetch data from  API
    axios
      .get("http://127.0.0.1:8000/api/parts")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <html>
        <body>
        <section class="slider_section ">
            <div class="slider_bg_box">
               <div className="bg"></div>
            </div>
            <div id="customCarousel1" class="carousel slide" data-ride="carousel">
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <div class="container ">
                        <div class="row">
                           <div class="col-md-7 col-lg-6 ">
                              <div class="detail-box">
                                 <h1>
                                    <span>
                                    Sale 20% Off
                                    </span>
                                    <br/>
                                    On Everything
                                 </h1>
                                 <p>
                                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                 </p>
                                 <div class="btn-box">
                                    <a href="" class="btn1">
                                    Shop Now
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  </div>
               </div>
               
         </section>
          <div className="Shop">
            <div className="shopTitle">
              <h1>WebService Shop</h1>
              <h2>Products</h2>
            </div>
            <div className="products">
              {products.map((product) => (
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.sellPrice}
                  pic={product.image}
                  desc={product.description}
                  qnt={product.quantity}
                  onAddToCart={() => addToCart(product)}
                />
              ))}
              
            </div>
          </div>
          
          <div class="product-collection">
            <div class="container">
              <div class="product-collection-wrapper">
                <div class="product-col-left flex">
                  <div class="product-col-content">
                    <h2 class="sm-title">men's shoes </h2>
                    <h2 class="md-title">men's collection </h2>
                    <p class="text-light">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Molestiae consequatur facilis eligendi quibusdam
                      voluptatibus exercitationem autem voluptatum, beatae
                      architecto odit, quisquam repellat. Deleniti, architecto
                      ab.
                    </p>
                    <button type="button" class="btn-dark">
                      Shop now
                    </button>
                  </div>
                </div>

                <div class="product-col-right">
                  <div class="product-col-r-top flex">
                    <div class="product-col-content">
                      <h2 class="sm-title">women's dresses </h2>
                      <h2 class="md-title">women's collection </h2>
                      <p class="text-light">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Molestiae consequatur facilis eligendi quibusdam
                        voluptatibus exercitationem autem voluptatum, beatae
                        architecto odit, quisquam repellat. Deleniti, architecto
                        ab.
                      </p>
                      <button type="button" class="btn-dark">
                        Shop now
                      </button>
                    </div>
                  </div>

                  <div class="product-col-r-bottom">
                    <div class="flex">
                      <div class="product-col-content">
                        <h2 class="sm-title">summer sale </h2>
                        <h2 class="md-title">Extra 50% Off </h2>
                        <p class="text-light">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Molestiae consequatur facilis eligendi quibusdam
                          voluptatibus exercitationem autem voluptatum, beatae
                          architecto odit, quisquam repellat. Deleniti,
                          architecto ab.
                        </p>
                        <button type="button" class="btn-dark">
                          Shop now
                        </button>
                      </div>
                    </div>
                    <div class="flex">
                      <div class="product-col-content">
                        <h2 class="sm-title">shoes </h2>
                        <h2 class="md-title">best sellers </h2>
                        <p class="text-light">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Molestiae consequatur facilis eligendi quibusdam
                          voluptatibus exercitationem autem voluptatum, beatae
                          architecto odit, quisquam repellat. Deleniti,
                          architecto ab.
                        </p>
                        <button type="button" class="btn-dark">
                          Shop now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
      <Footer />
    </>
  );
};
