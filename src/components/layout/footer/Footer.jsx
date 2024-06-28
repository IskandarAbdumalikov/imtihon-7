import React, { memo } from "react";
import "./footer.scss";
import logo from "../../../assets/icons/logo.svg";
import twitter from "../../../assets/icons/twitter.svg";
import facebook from "../../../assets/icons/facebook.svg";
import western from "../../../assets/images/western.svg";
import masterCard from "../../../assets/images/masterCard.svg";
import payPal from "../../../assets/images/payPal.svg";
import visa from "../../../assets/images/visa.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer__top container">
        <ul>
          <img src={logo} alt="" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.Since the 1500s, when an unknown printer.
          </p>
        </ul>
        <ul>
          <h3>Follow Us</h3>
          <p>
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>
          <div className="socials">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
          </div>
        </ul>
        <ul>
          <h3>Contact Us</h3>
          <p>E-Comm , 4578</p>
          <p>Marmora Road,</p>
          <p> Glasgow D04 89GR</p>
        </ul>
        <ul>
          <h3>Infomation</h3>
          <p>E-Comm , 4578</p>
          <p>Marmora Road,</p>
          <p> Glasgow D04 89GR</p>
        </ul>
        <ul>
          <h3>Service</h3>
          <p>E-Comm , 4578</p>
          <p>Marmora Road,</p>
          <p> Glasgow D04 89GR</p>
        </ul>
        <ul>
          <h3>My Account</h3>
          <p>E-Comm , 4578</p>
          <p>Marmora Road,</p>
          <p> Glasgow D04 89GR</p>
        </ul>
        <ul>
          <h3>Our Offers</h3>
          <p>E-Comm , 4578</p>
          <p>Marmora Road,</p>
          <p> Glasgow D04 89GR</p>
        </ul>
      </div>
      <div className="footer__bottom container">
        <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
        <div className="payments">
          <img src={western} alt="" />
          <img src={masterCard} alt="" />
          <img src={payPal} alt="" />
          <img src={visa} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
