import React, { useState } from "react";
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
import { FaHeart } from "react-icons/fa";

const Products = ({ title, haveCategories, givenData }) => {
  const [category, setCategory] = useState(null);
  console.log(category);
  const [limit, setLimit] = useState(8);
  let { data: categoriesList } = useGetAllCategoriesQuery();
  let { data: categoryData } = useGetProductByCategoryQuery(category, {
    limit,
  });

  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.value);
  console.log(wishlistData);
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
                <NavLink
                  className={"products__cards__card__img"}
                  to={`/products/${product.id}`}
                >
                  <img src={product.image} alt="" />
                  <div className="products__img__overlay">
                    <button onClick={() => dispatch(like(product))}>
                      <FaHeart />
                    </button>
                  </div>
                </NavLink>
                <div className="products__cards__card__info">
                  <h3 className="products__cards__card__info__title">
                    {product.title}
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
                <NavLink
                  className={"products__cards__card__img"}
                  to={`/products/${product.id}`}
                >
                  <img src={product.image} alt="" />
                  <div className="products__img__overlay">
                    <button onClick={() => dispatch(like(product))}>
                      <FaHeart />
                    </button>
                  </div>
                </NavLink>
                <div className="products__cards__card__info">
                  <h3 className="products__cards__card__info__title">
                    {product.title}
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
                <NavLink
                  className={"products__cards__card__img"}
                  to={`/products/${product.id}`}
                >
                  <img src={product.image} alt="" />
                  <div className="products__img__overlay">
                    <button onClick={() => dispatch(like(product))}>
                      <FaHeart />
                    </button>
                  </div>
                </NavLink>
                <div className="products__cards__card__info">
                  <h3 className="products__cards__card__info__title">
                    {product.title}
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

export default Products;
