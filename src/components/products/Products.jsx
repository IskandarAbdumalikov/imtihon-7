import React, { useState,memo } from "react";
import "./products.scss";
import { useGetAllCategoriesQuery } from "../../context/api/categoryApi";
import {
  useGetProductByCategoryQuery,
  useGetProductsQuery,
} from "../../context/api/productApi";
import { NavLink } from "react-router-dom";
import star from "../../assets/images/star.svg";
import halfStar from "../../assets/images/halfStar.svg";
import starRegular from "../../assets/images/starRegular.svg";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../context/slices/wishlistSlice/index";
import { FaCartPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import { addToCart } from "../../context/slices/cartSlice";

const Products = ({ title, haveCategories, givenData }) => {
  const [category, setCategory] = useState(null);
  const [limit, setLimit] = useState(8);
  const [showImg, setShowImg] = useState(true);
  let { data: categoriesList } = useGetAllCategoriesQuery();
  let { data: categoryData } = useGetProductByCategoryQuery(category, {
    limit,
  });

  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);
  
  console.log(cartData);
  const getRating = (rating) => {
    let res = [];
    for (let i = 0; i < Math.trunc(rating); i++) {
      res.push(<img src={star} alt="" />);
    }
    if (rating % 1 > 0.4) {
      res.push(<img src={halfStar} alt="" />);
    }
    for (let i = Math.round(rating); i < 5; i++) {
      res.push(<img src={starRegular} alt="" />);
    }
    return res;
  };
  let { data } = useGetProductsQuery({ limit });
  return (
    <section className="products container">
      <h2>{title}</h2>
      {haveCategories ? (
        <ul className="products__categories">
          <li onClick={() => setCategory(null)}>all</li>
          {categoriesList?.map((category, inx) => (
            <li onClick={() => setCategory(category)} key={inx}>
              {category}
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
      <div className="products__cards">
        {givenData
          ? givenData?.map((product) => (
              <div className="products__cards__card">
                <div className={"products__cards__card__img"}>
                  <NavLink to={`/products/${product.id}`}>
                    <img src={product.image} alt="" />
                  </NavLink>
                  <div className="products__img__overlay">
                    <button onClick={() => dispatch(like(product))}>
                      {wishlistData.some((el) => el.id === product.id) ? (
                        <FaHeart color="crimson" />
                      ) : (
                        <FaRegHeart />
                      )}
                    </button>
                    <button onClick={()=>dispatch(addToCart(product))}>
                      <FaCartPlus />
                    </button>
                  </div>
                </div>
                <div className="products__cards__card__info">
                  <h3 className="products__cards__card__info__title">
                    <NavLink to={`/products/${product.id}`}>
                      {product.title}
                    </NavLink>
                  </h3>
                  <div className="rating">{getRating(product.rating.rate)}</div>
                  <div className="products__cards__card__info__price">
                    <h2>${product.price}</h2>
                    <p>${product.price.toFixed(2) + 50}</p>
                    <h3>24% Off</h3>
                  </div>
                </div>
              </div>
            ))
          : category
          ? categoryData?.map((product) => (
              <div className="products__cards__card">
                <div className={"products__cards__card__img"}>
                  <NavLink to={`/products/${product.id}`}>
                    <img src={product.image} alt="" />
                  </NavLink>
                  <div className="products__img__overlay">
                    <button onClick={() => dispatch(like(product))}>
                      {wishlistData.some((el) => el.id === product.id) ? (
                        <FaHeart color="crimson" />
                      ) : (
                        <FaRegHeart />
                      )}
                    </button>
                    <button onClick={()=>dispatch(addToCart(product))}>
                      <FaCartPlus />
                    </button>
                  </div>
                </div>
                <div className="products__cards__card__info">
                  <h3 className="products__cards__card__info__title">
                    <NavLink to={`/products/${product.id}`}>
                      {product.title}
                    </NavLink>
                  </h3>
                  <div className="rating">{getRating(product.rating.rate)}</div>
                  <div className="products__cards__card__info__price">
                    <h2>${product.price}</h2>
                    <p>${product.price.toFixed(2) + 50}</p>
                    <h3>24% Off</h3>
                  </div>
                </div>
              </div>
            ))
          : data?.map((product) => (
              <div className="products__cards__card">
                <div className={"products__cards__card__img"}>
                  <NavLink to={`/products/${product.id}`}>
                    <img src={product.image} alt="" />
                  </NavLink>
                  <div className="products__img__overlay">
                    <button onClick={() => dispatch(like(product))}>
                      {wishlistData.some((el) => el.id === product.id) ? (
                        <FaHeart color="crimson" />
                      ) : (
                        <FaRegHeart />
                      )}
                    </button>
                    <button onClick={()=>dispatch(addToCart(product))}>
                      <FaCartPlus />
                    </button>
                  </div>
                </div>

                <div className="products__cards__card__info">
                  <h3 className="products__cards__card__info__title">
                    <NavLink to={`/products/${product.id}`}>
                      {product.title}
                    </NavLink>
                  </h3>
                  <div>{getRating(product.rating.rate)}</div>
                  <div className="products__cards__card__info__price">
                    <h2>${product.price}</h2>
                    <p>${product.price.toFixed(2) + 50}</p>
                    <h3>24% Off</h3>
                  </div>
                </div>
              </div>
            ))}
      </div>
      <button onClick={() => setLimit((p) => p + 8)} className="load__more">
        LOAD MORE
      </button>
    </section>
  );
};

export default memo(Products);
