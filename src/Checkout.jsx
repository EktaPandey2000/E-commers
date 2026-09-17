import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {

  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    house: "",
    city: "",
    state: "",
    pincode: ""
  });


  const handleChange = (e) => {

    setAddress({
      ...address,
      [e.target.name]: e.target.value
    });

  };


  const handleOrder = (e) => {

  e.preventDefault();

  // Address save
  localStorage.setItem(
    "deliveryAddress",
    JSON.stringify(address)
  );
  localStorage.removeItem("cart");
  navigate("/order-success");
    

  };


  return (

    <div className="checkout-page">

      <div className="checkout-container">

        <h1>Delivery Address</h1>

        <p>Enter your address to place the order</p>


        <form onSubmit={handleOrder}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={address.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={address.mobile}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="house"
            placeholder="House No. / Street / Area"
            value={address.house}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            value={address.state}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="pincode"
            placeholder="PIN Code"
            value={address.pincode}
            onChange={handleChange}
            required
          />


          <button type="submit">
            Place Order
          </button>

        </form>

      </div>

    </div>

  );
}

export default Checkout;