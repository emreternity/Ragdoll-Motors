import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ProductPage = () => {
  const dispatch = useDispatch();

  const params = useParams();

  const productModel = params.productModel;

  const productChoose = () => {
    if (params.productCategory === "muscle") {
      const productItems = useSelector((state) => state.products.muscle);
      return productItems;
    } else if (params.productCategory === "sports") {
      const productItems = useSelector((state) => state.products.sports);
      return productItems;
    } else if (params.productCategory === "motorcycles") {
      const productItems = useSelector((state) => state.products.motorcycles);
      return productItems;
    }
  };

  const productsData = productChoose();
  const productSingle = findByModelName(productModel);
  const singleImages = productSingle["images"];

  function findByModelName(modelName) {
    for (let key in productsData) {
      if (productsData[key].model === modelName) {
        return productsData[key];
      }
    }
    return null;
  }

  const imgs = {
    img1: singleImages.frontQuarter,
    img2: singleImages.rearQuarter,
    img3: singleImages.front,
    img4: singleImages.rear,
  };
  const [activeImg, setActiveImage] = useState(imgs.img1);

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        model: productSingle.model,
        price: productSingle.price,
        speed: productSingle.speed,
        frontQuarter: imgs.img1,
        rearQuarter: imgs.img2,
        front: imgs.img3,
        rear: imgs.img4,
        manufacturer: productSingle.manufacturer,
        seats: productSingle.seats,
        topSpeed: productSingle.topSpeed,
        acceleration: productSingle.acceleration,
        handling: productSingle.handling,
        quantity: 1,
        totalPrice: productSingle.price,
      })
    );
  };

  return (
    <section className=" py-20">
      <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center my-20 mx-5">
        <div className="flex flex-col gap-6 lg:w-2/4">
          <img
            src={activeImg}
            alt=""
            className="w-full h-full aspect-[4/3] object-fill rounded-xl"
          />
          <div className="flex flex-row justify-between h-24">
            <img
              src={imgs.img1}
              alt=""
              className="w-35 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(imgs.img1)}
            />
            <img
              src={imgs.img2}
              alt=""
              className="w-35 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(imgs.img2)}
            />
            <img
              src={imgs.img3}
              alt=""
              className="w-35 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(imgs.img3)}
            />
            <img
              src={imgs.img4}
              alt=""
              className="w-35 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(imgs.img4)}
            />
          </div>
        </div>
        {/* ABOUT */}
        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <span className=" text-orange-500 font-semibold">
              {productSingle.manufacturer.charAt(0).toUpperCase() +
                productSingle.manufacturer.slice(1)}
              's Masterpiece
            </span>
            <p className="text-2xl font-bold text-white">
              {productSingle.model.charAt(0).toUpperCase() +
                productSingle.model.slice(1)}
            </p>
          </div>
          <h6 className="text-2xl font-semibold text-white">
            ${productSingle.price}
          </h6>
          <div className="flex flex-row items-center gap-12 py-3">
            <button
              onClick={addToCartHandler}
              className="bg-orange-500 hover:bg-orange-200 text-orange-200 hover:text-orange-500 font-semibold py-3 px-16 rounded-xl h-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
