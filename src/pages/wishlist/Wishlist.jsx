import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../../components/products/Products";
import "./wishlist.scss";
import Empty from "../../components/empty/Empty";

const Wishlist = () => {
  let wishlistData = useSelector((state) => state.wishlist.value);
  return (
    <div className="container">
      {wishlistData.length <= 0 ? (
        <Empty type={"wishlist"} />
      ) : (
        <div className="wishlist__products">
          <Products title="Wishlist" givenData={wishlistData} />
        </div>
      )}
    </div>
  );
};

export default memo(Wishlist);
