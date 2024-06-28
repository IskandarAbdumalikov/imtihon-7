import React, { useState } from "react";
import "./cart.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  decrementCart,
  deleteAllCart,
} from "../../context/slices/cartSlice";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import Payment from "../../components/payment/Payment";
import Empty from "../../components/empty/Empty";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.value);
  const [showModule, setShowModule] = useState(false);

  const calculatePrice = () => {
    const total = cartData.reduce((sum, el) => sum + el.quantity * el.price, 0);
    return total.toFixed(2);
  };

  return (
    <div className="container cart">
      {!cartData?.length > 0 ? (
        <Empty type={"cart"} />
      ) : (
        <>
          <div className="table__wrapper">
            <table>
              <thead>
                <tr>
                  <th className="th-first">PRODUCT</th>
                  <th>PRICE</th>
                  <th>QTY</th>
                  <th>UNIT PRICE</th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((el) => (
                  <tr key={el.id}>
                    <td className="cart__product">
                      <button onClick={() => dispatch(removeFromCart(el.id))}>
                        <MdCancel />
                      </button>
                      <Link to={`/products/${el.id}`}>
                        <img src={el.image} alt="" />
                      </Link>
                      <p>{el.title}</p>
                    </td>
                    <td>${(el.price * el.quantity).toFixed(2)}</td>
                    <td className="cart__counter">
                      <button
                        disabled={el.quantity <= 0}
                        onClick={() => dispatch(decrementCart(el))}
                      >
                        -
                      </button>
                      <h2>{el.quantity}</h2>
                      <button
                        disabled={el.rating.count <= el.quantity}
                        onClick={() => dispatch(addToCart(el))}
                      >
                        +
                      </button>
                    </td>
                    <td>${el.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom__left">
              <form action="">
                <input placeholder="Voucher code" type="text" />
                <button>Redeem</button>
              </form>
            </div>
            <div className="cart__bottom__right">
              <div className="subtotal">
                <p>Subtotal:</p>
                <p>${calculatePrice()}</p>
              </div>
              <div className="shipping">
                <p>Shipping fee:</p>
                <p>$20</p>
              </div>
              <div className="coupon">
                <p>Coupon:</p>
                <p>no</p>
              </div>
              <div className="total">
                <h1>Total</h1>
              </div>
              <button onClick={() => setShowModule(true)}>Check out</button>
            </div>
          </div>
        </>
      )}

      {showModule && (
        <>
          <Payment
            setShowModule={setShowModule}
            deleteAllCart={() => dispatch(deleteAllCart())}
          />
          <div onClick={() => setShowModule(false)} className="overlay"></div>
        </>
      )}
    </div>
  );
};

export default Cart;
