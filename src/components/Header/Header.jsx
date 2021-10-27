import React from "react";
import "./Header.css";
import magnifier from "./assets-header/magnifier.png";
import cart from "./assets-header/cart.png";
import bricks from "./assets-header/three-bricks.png";

let Header = () => {
  return (
    <header className="App-header">
      <div className="logo-Samsung">Samsung</div>
      <div className="Mobile">Mobile</div>
      <div className="TVAV">TV & AV</div>
      <div className="Home">Home Appliances</div>
      <div className="Computing">Computing</div>
      <div className="Offers">Offers</div>
      <div className="Explore">Explore</div>
      <div className="Support">Support</div>
      <div className="Business">Business</div>
      <div className="magnifier">
        <img src={magnifier} />
      </div>
      <div className="cart">
        <img src={cart} />
      </div>
      <div className="bricks">
        <img src={bricks} />
      </div>
    </header>
  );
};

export default Header;
