import React from "react";
import CartCard from "./CartCard";
import cartSlice from "../../store/cart-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function ShoppingCart() {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalPrice = useSelector((state) => state.cart.totalPrice);

  let totalPrice = 0;

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
                    item={{
                      model: item.model,
                      price: item.price,
                      speed: item.speed,
                      frontQuarter: item.frontQuarter,
                      rearQuarter: item.rearQuarter,
                      front: item.front,
                      rear: item.rear,
                      side: item.side,
                      manufacturer: item.manufacturer,
                      seats: item.seats,
                      topSpeed: item.topSpeed,
                      acceleration: item.acceleration,
                      handling: item.handling,
                      quantity: item.quantity,
                      totalPrice: item.price,
                    }}
                  />
                ))}
              </ul>

              <div className="mt-8 flex justify-end border-t border-orange-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-white">
                    <div className="flex justify-between">
                      <dt>Quantity of All Items</dt>
                      <dd>{cartQuantity}</dd>
                    </div>

                    <div className="flex justify-between text-xl font-medium">
                      <dt>Total</dt>
                      <dd>
                        {"$"}
                        {cartTotalPrice}
                      </dd>
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
