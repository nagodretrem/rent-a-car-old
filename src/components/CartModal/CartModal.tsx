import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { cartActions } from "../Cart/cartSlice";

const CartModal = () => {
  const showCart = useSelector((state: RootState) => state.cart.showCart);
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(cartActions.setShowCart());
  };

  return (
    <div>
      {showCart && (
        <div
          className="modal fade show"
          tabIndex={-1}
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-bottom-0">
                <h5 className="modal-title">Your Shopping Cart</h5>
                <button type="button" className="close" onClick={closeHandler}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table table-image">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="w-25">
                        <img
                          src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"
                          className="img-fluid img-thumbnail"
                          alt="Sheep"
                        />
                      </td>
                      <td>Vans Sk8-Hi MTE Shoes</td>
                      <td>89$</td>
                      <td className="qty">2</td>
                      <td>178$</td>
                    </tr>
                  </tbody>
                </table>
                <div className="d-flex justify-content-end">
                  <h5>
                    Total: <span className="price text-success">89$</span>
                  </h5>
                </div>
              </div>
              <div className="modal-footer border-top-0 d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeHandler}
                >
                  Close
                </button>
                <button type="button" className="btn btn-success">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
