import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";

function ShoppingCart() {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <section className="h-full flex items-center">
        <div className="mx-auto my-[81.5px] max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 scale-125">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-orange-500 sm:text-3xl">
                Your Cart
              </h1>
            </header>

            <div className="mt-8">
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <CartCard
                    key={item.model}
                    item={{
                      model: item.model,
                      quantity: item.quantity,
                      totalPrice: item.totalPrice,
                      price: item.price,
                    }}
                  />
                ))}
              </ul>

              <div className="mt-8 flex justify-end border-t border-orange-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-white">
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd>£250</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>VAT</dt>
                      <dd>£25</dd>
                    </div>

                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>£200</dd>
                    </div>
                  </dl>

                  <div className="flex justify-end">
                    <a
                      href="#"
                      className="block rounded bg-orange-700 px-5 py-3 text-sm text-white transition hover:bg-orange-500"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ShoppingCart;
