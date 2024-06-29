// Payment.jsx
import React, { memo } from "react";
import { useGetValue } from "../../hooks/useGetValue";
import "./payment.scss";
import creditCard from "../../assets/icons/credit.svg";
import payPal from "../../assets/icons/payPal.svg";
import bank from "../../assets/icons/bank.svg";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import x from "../../assets/icons/x.svg";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  phone: "",
  paymentType: "",
};

const BOT_TOKEN = "7177289161:AAHsDSL97FVQ4fn-YiMr9oWa9udUems4nvU";
const CHAT_ID = "-1002243961126";

const Payment = ({ setShowModule, deleteAllCart, calculatePrice, data }) => {
  const { formData, handleChange, setFormData } = useGetValue(initialState);

  const handleCloser = () => {
    setFormData(initialState);
    setShowModule(false);
    deleteAllCart();
  };

  let title = data?.map((el) => el.title);

  const handleSendMessage = (e) => {
    e.preventDefault();
    let text = "Payment info: %0A";
    text += `First Name: ${formData.firstName} %0A`;
    text += `Last Name: ${formData.lastName} %0A`;
    text += `Email: ${formData.email} %0A`;
    text += `Address: ${formData.address} %0A`;
    text += `Phone: ${formData.phone} %0A`;
    text += `Type of payment: ${formData.paymentType} %0A`;
    text += `Total: $${calculatePrice()} %0A`;
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    handleCloser();
  };

  return (
    <div className="payment">
      <div className="payment__header">
        <img onClick={handleCloser} width={25} src={arrowLeft} alt="Close" />
        <img onClick={handleCloser} width={25} src={x} alt="Close" />
      </div>
      <form onSubmit={handleSendMessage} className="payment__form">
        <div className="payment__form__header">
          <h2>Make Payment</h2>
        </div>
        <div className="payment__form__body">
          <input
            onChange={handleChange}
            required
            type="text"
            value={formData.firstName}
            placeholder="First Name"
            name="firstName"
          />
          <input
            onChange={handleChange}
            required
            value={formData.lastName}
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          <input
            onChange={handleChange}
            required
            value={formData.email}
            type="email"
            placeholder="Email address"
            name="email"
          />
          <textarea
            onChange={handleChange}
            required
            value={formData.address}
            placeholder="Address for delivery"
            name="address"
            className="address"
          />
          <input
            onChange={handleChange}
            required
            type="text"
            placeholder="Phone Number"
            value={formData.phone}
            name="phone"
          />
          <div className="payment__method">
            <h3>Select Method of Payment</h3>
            <div className="payment__method-card">
              <img src={creditCard} alt="Credit Card" />
              <p>Credit Card Or Debit</p>
              <input
                name="paymentType"
                onChange={handleChange}
                value="card"
                type="radio"
              />
            </div>
            <div className="payment__method-card">
              <img src={payPal} alt="Paypal" />
              <p>Paypal</p>
              <input
                name="paymentType"
                onChange={handleChange}
                value="payPal"
                type="radio"
              />
            </div>
            <div className="payment__method-card">
              <img src={bank} alt="Bank Transfer" />
              <p>Bank Transfer</p>
              <input
                name="paymentType"
                onChange={handleChange}
                value="bank"
                type="radio"
              />
            </div>
          </div>
        </div>
        <div className="payment__form__footer">
          <button type="submit">Go to Payment</button>
        </div>
      </form>
    </div>
  );
};

export default memo(Payment);
