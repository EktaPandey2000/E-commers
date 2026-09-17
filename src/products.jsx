import { useState } from "react";
import { useNavigate } from "react-router-dom";



const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1499,
    image: "/images/Headphones.jpg"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2499,
    image: "/images/Watch.jpg"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 1999,
    image: "/images/Shoes.jpg"
  },
  {
    id: 4,
    name: "Backpack",
    price: 999,
    image: "/images/bag.jpg"
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 799,
    image: "/images/Sunglasses.jpg"
  },
  {
    id: 6,
    name: "Camera",
    price: 3599,
    image: "/images/Camera.jpg"
  },
  {
    id: 7,
    name: "Laptop",
    price: 45999,
    image: "/images/Laptop.jpg"
  },
  {
    id: 8,
    name: "Mobile Phone",
    price: 18999,
    image: "/images/Phone.jpg"
  },
  {
    id: 9,
    name: "Keyboard",
    price: 1299,
    image: "/images/Keyboard.jpg"
  },
  {
    id: 10,
    name: "Coffee Mug",
    price: 399,
    image: "/images/Mug.jpg"
  },
  {
    id: 11,
    name: "Travel Bag",
    price: 1299,
    image: "/images/travelbag.jpg"
  },
  {
    id: 12,
    name: "Gaming Mouse",
    price: 899,
    image: "/images/Mouse.jpg"
  },
  {
    id: 13,
    name: "Bluetooth Speaker",
    price: 1599,
    image: "/images/Speaker.jpg"
  },
  {
    id: 14,
    name: "Power Bank",
    price: 999,
    image: "/images/Powerbank.jpg"
  },
  {
    id: 15,
    name: "Tablet",
    price: 12999,
    image: "/images/Tablet.jpg"
  },
  {
    id: 16,
    name: "Smart TV",
    price: 28999,
    image: "/images/TV.jpg"
  },
  {
    id: 17,
    name: "Earbuds",
    price: 1199,
    image: "/images/Earbuds.jpg"
  },
  {
    id: 18,
    name: "Wallet",
    price: 699,
    image: "/images/Wallet.jpg"
  },
  {
    id: 19,
    name: "Hoodie",
    price: 1499,
    image: "/images/Hoodie.jpg"
  },
  {
    id: 20,
    name: "Backpack Pro",
    price: 1799,
    image: "/images/BackpackPro.jpg"
  },
  {
    id: 21,
    name: "Gaming Keyboard",
    price: 2499,
    image: "/images/GamingKeyboard.jpg"
  },
  {
    id: 22,
    name: "Fitness Band",
    price: 1899,
    image: "/images/FitnessBand.jpg"
  },
  {
    id: 23,
    name: "Desk Lamp",
    price: 899,
    image: "/images/Lamp.jpg"
  },
  {
    id: 24,
    name: "Water Bottle",
    price: 599,
    image: "/images/Bottle.jpg"
  }
];

function Products() {

  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {

    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];

  });

  const addToCart = (product) => {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );


    let updatedCart;


    if (existingProduct) {

      updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );

    } else {

      updatedCart = [
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ];

    }


    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

  };

  const cartItemCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (

    <div className="products-page">

      <div className="products-header">

        <div>

          <h1>
            Our Products
          </h1>

          <p>
            Choose your favorite products
          </p>

        </div>

        <button
          className="my-cart-btn"
          onClick={() => navigate("/cart")}
        >

          <span className="cart-icon">
            🛒
          </span>

          <span>
            My Cart
          </span>

          <span className="cart-count">
            {cartItemCount}
          </span>

        </button>

      </div>


      <div className="products-container">


        <div className="product-title">

          <h2>
            Products
            <span>
              {" "}({products.length} Items)
            </span>
          </h2>

        </div>


        <div className="products-scroll-area">

          <div className="products-grid">


            {products.map((product) => (

              <div
                className="product-card"
                key={product.id}
              >


                {/* PRODUCT IMAGE */}

                <img
                  src={product.image}
                  alt={product.name}
                />



                {/* PRODUCT INFORMATION */}

                <div className="product-info">


                  <h2>
                    {product.name}
                  </h2>


                  <p className="product-price">
                    ₹{product.price}
                  </p>


                  <button
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>


                </div>

              </div>

            ))}


          </div>

        </div>

      </div>

    </div>

  );

}


export default Products;