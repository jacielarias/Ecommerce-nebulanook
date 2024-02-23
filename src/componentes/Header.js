import React, { useState } from "react";

import "../style sheet/Header.css";
import searchIcon from "../imagenes/search.svg";
import shoppingIcon from "../imagenes/shopping.svg";
import x from "../imagenes/x.svg"

function Header({
  openCart,
  totalProducts,
  search,
  searcher,
  toggleInput,
  searchInput,
  results,
  openModalProduct,
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
              <div className={`search-input-content ${searchInput ? "active" : ""}`}>
                {/*----- Input -----*/}
                <section className="input-content">
                  <input
                    value={search}
                    onChange={searcher}
                    className={`search-input ${searchInput ? "active" : ""}`}
                    type="text"
                    id="name-product"
                    placeholder="Search product..."
                  ></input>
                  <img
                    src={x}
                    className="close-input-icon"
                    title="close"
                    alt="close"
                    onClick={() => toggleInput()}
                  />
                </section>

                {/*----- Search Results -----*/}
                <h2
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: '900',
                    width: "100%",
                    textAlign: "left",
                    margin: "50px 0 0 10px",
                  }}
                >
                  SEARCH RESULTS...
                </h2>
                <section className="section-product-results">
                  {results.map((product) => (
                    <div
                      className="section-product-header"
                      key={product.id}
                      onClick={() => openModalProduct(product)}
                    >
                      <div className="image-content-header" title={product.title}>
                        <img
                          className="product-image-header"
                          src={product.image}
                          alt={product.title}
                        />
                      </div>
                      <section className="desc-content-header">
                        <div className="description-product-header">
                          <h2 className="product-title-header" title="View details">
                            {product.title}
                          </h2>
                        </div>
                      </section>
                    </div>
                  ))}
                </section>
              </div>
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
