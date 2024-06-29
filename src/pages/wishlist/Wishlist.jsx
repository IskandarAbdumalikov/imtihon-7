import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../../components/products/Products";
import "./wishlist.scss";
import Empty from "../../components/empty/Empty";

const Wishlist = () => {
  let wishlistData = useSelector((state) => state.wishlist.value);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [wishlistData]);
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
