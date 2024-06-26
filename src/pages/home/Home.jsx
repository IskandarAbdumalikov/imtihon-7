import React from "react";
import "./home.scss";
import { useGetProductsQuery } from "../../context/api/productApi";
import Products from "../../components/products/Products";
import sneaker from "../../assets/images/sneaker.svg";
import shipping from "../../assets/images/shipping.svg";
import refund from "../../assets/images/refund.svg";
import support from "../../assets/images/support.svg";
import nike from "../../assets/images/nike.svg";
import figma from "../../assets/images/figma.svg";
import kronos from "../../assets/images/kronos.svg";
import Search from "../../components/search/Search";

const Home = () => {
  let { data, isLoading } = useGetProductsQuery();
  return (
    <div className="main">
      <section id="hero">
        <div className="container">
          <div className="hero__left ">
            <h1>Super Flash Sale 50% Off</h1>
          </div>
          <div className="hero__right">
            {data?.slice(0, 3).map((product) => (
              <div key={product.id} className="hero__card">
                <div className="hero__card__top">
                  <h3>{product.title}</h3>
                  <h2>${product.price}</h2>
                </div>
                <img src={product.image} alt="" />
                <div className="hero__card__bottom">
                  <p>$534.33</p>
                  <h3>24% Off</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Products haveCategories={true} title={"BEST SELLER"} />
      <section className="sneakers">
        <div className="sneakers__top">
          <div className="sneakers__top__main container">
            <div className="sneakers__top__main__left">
              <h1>Adidas Men Running Sneakers</h1>
              <h3>Performance and design. Taken right to the edge.</h3>
              <div className="shop__now-btn">
                <h2> SHOP NOW</h2>
                <span></span>
              </div>
            </div>
            <div className="sneakers__top__main__right">
              <img src={sneaker} alt="" />
            </div>
          </div>
        </div>
        <div className="sneakers__bottom container">
          <div className="sneakers__bottom__card">
            <img src={shipping} alt="" />
            <h2>FREE SHIPPING</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="sneakers__bottom__card">
            <img src={refund} alt="" />
            <h2>100% REFUND</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="sneakers__bottom__card">
            <img src={support} alt="" />
            <h2>SUPPORT 24/7</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </section>
      <section className="news container">
        <h2>LATEST NEWS</h2>
        <div className="news__cards">
          <div className="news__cards__card">
            <img src={nike} alt="" />
            <div className="news__cards__card__info">
              <p>01 Jan, 2015</p>
              <h2>Fashion Industry</h2>
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h3>
            </div>
          </div>
          <div className="news__cards__card">
            <img src={figma} alt="" />
            <div className="news__cards__card__info">
              <p>01 Jan, 2015</p>
              <h2>Best Design Tools</h2>
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h3>
            </div>
          </div>
          <div className="news__cards__card">
            <img src={kronos} alt="" />
            <div className="news__cards__card__info">
              <p>01 Jan, 2015</p>
              <h2>HR Community</h2>
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: "100px" }} className="featured container">
        <h2>FEATURED PRODUCTS</h2>
        <div className="featured__cards">
          {data?.slice(0, 3).map((product) => (
            <div key={product.id} className="featured__cards__card">
              <div className="featured__cards__card__left">
                <img src={product.image} alt="" />
              </div>
              <div className="featured__cards__card__right">
                <p>{product.title}</p>
                <div className="rating">{product.rating.rate}</div>
                <div className="featured__cards__card__right__price">
                  <h3>${product.price}</h3>
                  <p>${product.price + 100}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="container">
        <Search />
      </div>
    </div>
  );
};

export default Home;
