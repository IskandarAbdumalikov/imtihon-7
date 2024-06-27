import React, { useEffect, useState } from "react";
import "./header.scss";
import account from "../../../assets/icons/account.svg";
import heart from "../../../assets/icons/heart.svg";
import cart from "../../../assets/icons/cart.svg";
import search from "../../../assets/icons/search.svg";
import logo from "../../../assets/icons/logo.svg";
import home from "../../../assets/icons/home.svg";
import bar from "../../../assets/icons/bar.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showList, setShowList] = useState(false);
  const [fixHeader, setFixHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setFixHeader(true);
      } else {
        setFixHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`container header ${fixHeader ? "fixed" : ""}`}>
      <div className="header__top__nav">
        <div className="header__top__nav__left">
          <select name="lang" id="">
            <option value="EN">EN</option>
            <option value="UZB">UZB</option>
            <option value="RUS">RUS</option>
          </select>
          <select name="currency" id="">
            <option value="USD">USD</option>
            <option value="UZS">UZS</option>
          </select>
        </div>
        <div className="header__top__nav__right">
          <NavLink to={"/"}>
            <div className="header__top__nav__right__home">
              <img src={home} alt="Home" />
              <h3>Home</h3>
            </div>
          </NavLink>
          <NavLink to={"/admin"}>
            <img src={account} alt="Account" />
            <h3>Account</h3>
          </NavLink>
          <NavLink className="Wishlist" to={"/wishlist"}>
            <img src={heart} alt="Wishlist" />
            <h3>Wishlist</h3>
          </NavLink>
          <NavLink to={"/cart"}>
            <img src={cart} alt="Cart" />
            <h3>Cart</h3>
          </NavLink>
          <a className="items">Items</a>
          <NavLink to={"/explore"}>
            <p>$0.00</p>
            <img src={search} alt="Explore" />
            <h3>Explore</h3>
          </NavLink>
        </div>
      </div>
      <div
        className={`header__bottom__nav  ${
          fixHeader ? "fixed__header__bottom__nav" : ""
        }`}
      >
        <NavLink to={"/"} className="header__bottom__nav__logo">
          <img src={logo} alt="Logo" />
        </NavLink>
        <ul
          className={`header__bottom__nav__list ${
            showList ? "show__list" : ""
          }`}
        >
          <NavLink to={"/"}>HOME</NavLink>
          <NavLink to={"/bags"}>BAGS</NavLink>
          <NavLink to={"/sneaker"}>SNEAKERS</NavLink>
          <NavLink to={"/belt"}>BELT</NavLink>
          <NavLink to={"/contact"}>CONTACT</NavLink>
        </ul>
        {showList && (
          <div onClick={() => setShowList(false)} className="overlay"></div>
        )}
        <img
          onClick={() => setShowList(true)}
          className="bar"
          width={20}
          src={bar}
          alt="Menu"
        />
      </div>
    </header>
  );
};

export default Header;
