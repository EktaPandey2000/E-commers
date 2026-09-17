
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {

  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];

  });


  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);


  const increaseQuantity = (id) => {

    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );

  };


  const decreaseQuantity = (id) => {

    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);

  };


  const removeItem = (id) => {

    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);

  };


  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  return (

    <div className="cart-page">

      <div className="cart-container">

        <div className="cart-heading">

          <h1>My Cart</h1>

          <p>
            Review your selected products
          </p>

        </div>


        {cart.length === 0 ? (


          <div className="empty-cart">

            <div className="empty-cart-icon">
              🛍️
            </div>

            <h2>Your Cart is Empty</h2>

            <p>
              You haven't added any products yet.
            </p>

            <button
              onClick={() => navigate("/products")}
            >
              Continue Shopping
            </button>

          </div>

        ) : (


          <div className="cart-content">

            <div className="cart-items">

              {cart.map((item) => (

                <div
                  className="cart-item"
                  key={item.id}
                >

                  {/* Product Image */}

                  <img
                    src={item.image}
                    alt={item.title}
                  />


                  {/* Product Details */}

                  <div className="cart-product-info">

                    <h3>
                      {item.title}
                    </h3>

                    <p className="product-price">
                      ₹{item.price}
                    </p>


                    {/* Quantity */}

                    <div className="quantity-box">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        +
                      </button>

                    </div>

                  </div>


                  {/* Item Total */}

                  <div className="item-total">

                    <strong>
                      ₹{item.price * item.quantity}
                    </strong>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeItem(item.id)
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

            </div>


            {/* Order Summary */}

            <div className="cart-summary">

              <h2>
                Order Summary
              </h2>


              <div className="summary-row">

                <span>
                  Total Items
                </span>

                <span>
                  {cart.reduce(
                    (total, item) =>
                      total + item.quantity,
                    0
                  )}
                </span>

              </div>


              <div className="summary-row total-row">

                <span>
                  Total
                </span>

                <span>
                  ₹{totalPrice}
                </span>

              </div>

              <button
                className="continue-btn"
                onClick={() =>
                  navigate("/products")
                }
              >
                Continue Shopping
              </button>
              <button className="checkout-btn" onClick={() => navigate("/checkout")}>Proceed to Checkout</button>

            </div>

          </div>

        )}

      </div>

    </div>

  );
}

export default Cart;