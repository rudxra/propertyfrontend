import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
import Image from "next/image";
import { load } from "@cashfreepayments/cashfree-js";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter()
  const cartRef = useRef();
  const { isSignedIn, user, isLoaded } = useUser();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();
  const [orderId, setOrderId] = useState("");
  const [cashfree, setCashfree] = useState(null);

  useEffect(() => {
    const initializeSDK = async () => {
      const cfInstance = await load({ mode: "sandbox" });
      setCashfree(cfInstance);
    };
    initializeSDK();
  }, []);

  const getSessionId = async () => {
    try {
      const res = await axios.get(`/api/payment?orderAmount=${totalPrice}`);
      if (res.data && res.data.payment_session_id) {
        console.log(res.data);
        setOrderId(res.data.order_id);
        return res.data.payment_session_id;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const verifyPayment = async (orderId) => {
    try {
      const res = await axios.post("/api/payment", { orderId });
      if (res && res.data) {
        alert("Payment verified");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(isSignedIn);
    
    if (!isSignedIn) {
      toast.error(`Please Login First`);
      setTimeout(() => {
        
        router.push('https://learning-titmouse-62.accounts.dev/sign-in?')
      }, 2000);
    }
    else{

      try {
        const sessionId = await getSessionId();
        const checkoutOptions = {
          paymentSessionId: sessionId,
          redirectTarget: "_modal",
        };
        cashfree.checkout(checkoutOptions).then((res) => {
          console.log("Payment initialized");
          verifyPayment(orderId);
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="botton"
                className="btn"
                onClick={() => setShowCart(false)}
              >
                Continue shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>Cr{item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>Cr {totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn" onClick={handleClick}>
                Proceed to checkout
              </button>{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
