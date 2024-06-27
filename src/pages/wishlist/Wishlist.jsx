import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../../components/products/Products";
import "./wishlist.scss";

const Wishlist = () => {
  let wishlistData = useSelector((state) => state.wishlist.value);
  return (
    <div className="container">
      <div className="wishlist__products">
        <Products title="Wishlist" givenData={wishlistData} />
      </div>
    </div>
  );
};

export default Wishlist;
