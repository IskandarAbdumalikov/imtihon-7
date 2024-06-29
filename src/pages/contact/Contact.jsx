import React, { memo, useEffect, useState } from "react";
import "./contact.scss";
import Search from "../../components/search/Search";
import { useGetValue } from "../../hooks/useGetValue";

const initialState = {
  fullname: "",
  email: "",
  message: "",
};

const BOT_TOKEN = "7177289161:AAHsDSL97FVQ4fn-YiMr9oWa9udUems4nvU";
const CHAT_ID = "-1002243961126";
const Contact = () => {
  const { formData, handleChange, setFormData } = useGetValue(initialState);
  const handleSendMessage = (e) => {
    e.preventDefault();
    let text = "Contacts: %0A";
    text += `FullName: ${formData.fullname} %0A`;
    text += `Email: ${formData.email} %0A`;
    text += `Message: ${formData.message} %0A`;
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setFormData(initialState);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact__wrapper">
      <div className="contact container">
        <div className="contact__left">
          <h1>Get in touch</h1>
          <a href="">contact@e-comm.ng</a>
          <a href="">+234 4556 6665 34</a>
          <a href="">20 Prince Hakerem Lekki Phase 1, Lagos.</a>
        </div>
        <div className="contact__right">
          <form onSubmit={handleSendMessage} action="">
            <div className="fullname">
              <label htmlFor="fullname">Fullname</label>
              <input
                onChange={handleChange}
                value={formData.fullname}
                placeholder="James Doe"
                type="text"
                name="fullname"
                id="fullname"
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                onChange={handleChange}
                value={formData.email}
                placeholder="jamesdoe@gmail.com"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="message">
              <label htmlFor="message">Message</label>
              <textarea
                onChange={handleChange}
                value={formData.message}
                type="text"
                name="message"
                id="message"
              ></textarea>
            </div>
            <button>send</button>
          </form>
        </div>
      </div>
      <Search />
    </div>
  );
};

export default memo(Contact);
