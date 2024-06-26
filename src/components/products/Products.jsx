import React, { useState } from "react";
import "./products.scss";
import { useGetAllCategoriesQuery } from "../../context/api/categoryApi";
import {
  useGetProductByCategoryQuery,
  useGetProductsQuery,
} from "../../context/api/productApi";
import { NavLink } from "react-router-dom";

const Products = ({ title, haveCategories }) => {
  const [category, setCategory] = useState(null);
  const [limit, setLimit] = useState(8);
  let { data: categoriesList } = useGetAllCategoriesQuery();
  let { data: categoryData } = useGetProductByCategoryQuery(category, {
    limit,
  });
  let { data } = useGetProductsQuery({ limit });
  console.log(categoryData);
  return (
    <section className="products container">
      <h2>{title}</h2>
      <ul className="products__categories">
        <li onClick={() => setCategory(null)}>all</li>
        {categoriesList?.map((category, inx) => (
          <li onClick={() => setCategory(category)} key={inx}>
            {category}
          </li>
        ))}
      </ul>
      <div className="products__cards">
        {data?.map((product) => (
          <div className="products__cards__card">
            <NavLink>
              <img src={product.image} alt="" />
            </NavLink>
            <div className="products__cards__card__info">
              <h3 className="products__cards__card__info__title">
                {product.title}
              </h3>
              <p>{product.rating.rate}</p>
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
