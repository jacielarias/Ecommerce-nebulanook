import React, { useState } from "react";

import "../style sheet/Header.css";
import searchIcon from "../imagenes/search.svg";
import shoppingIcon from "../imagenes/shopping.svg";
import x from "../imagenes/x.svg"

function Header({
  openCart,
  totalProducts,
  toggleInput,
}) {
  const [isSticky, setIsSticky] = useState(false);

  function StickyNav() {
    if (window.scrollY > 115) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }

  window.addEventListener("scroll", StickyNav);

  const icons = [
    {
      src: shoppingIcon,
      class: "icon-shopping",
      onClick: openCart,
      productsInCart: true,
    },
  ];

  const handleNavLinkClick = (id) => (event) => {
    event.preventDefault();
    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className={isSticky ? "top-header sticky" : "top-header"}>
      <div className="top">
        <p>
          The Winter Sale continues. Enjoy free shipping on all orders over $100
          USD. Shop Now!
        </p>
      </div>
      <header className="header">
        <h2 className="logo">
          <span style={{ color: "rgba(206, 173, 107)" }}>Nebula</span>Nook
        </h2>

      {/*----- Nav header -----*/}
        <nav className="nav-icons">
          <ul className="nav-list">
            <a href="#contact" className="nav-li-text"  onClick={handleNavLinkClick("contact")}>Contact</a>
            <a href="#benefits" className="nav-li-text"  onClick={handleNavLinkClick("benefits")}>Benefits</a>
            <a href="#faqs" className="nav-li-text"  onClick={handleNavLinkClick("faqs")}>FAQs</a>
            <li>
              <i className="search-icon-content" onClick={() => toggleInput()}>
                <img className="search-icon-header" src={searchIcon} alt="Search product" />
              </i>
            </li>
            {icons.map((icon, index) => (
              <li
                key={index}
                className={`icon-content ${icon.class}`}
                onClick={icon.onClick}
              >
                <img
                  className="img-icon-header"
                  src={icon.src}
                  alt={`Icon ${index}`}
                />
                {icon.productsInCart && (
                  <span className="products-in-cart">{totalProducts}</span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
