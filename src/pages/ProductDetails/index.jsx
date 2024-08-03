import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchSingleData } from "../../store/product-actions";

const ProductPage = () => {
  const dispatch = useDispatch();

  const params = useParams();
  const single = params.productModel;

  const category = useSelector((state) => state.products.single);

  const singleImages = useSelector((state) => state.products.singleImg);

  useEffect(() => {
    dispatch(fetchSingleData(single));
  }, [dispatch]);

  const images = {
    img1: singleImages.frontQuarter,
    img2: singleImages.rearQuarter,
    img3: singleImages.front,
    img4: singleImages.rear,
  };

  const [activeImg, setActiveImage] = useState(images.img1);

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        model: category.model,
        price: category.price,
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
              src={images.img1}
              alt=""
              className="w-35 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img1)}
            />
            <img
              src={images.img2}
              alt=""
              className="w-35 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img2)}
            />
            <img
              src={images.img3}
              alt=""
              className="w-35 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img3)}
            />
            <img
              src={images.img4}
              alt=""
              className="w-35 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img4)}
            />
          </div>
        </div>
        {/* ABOUT */}
        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <span className=" text-orange-500 font-semibold">
              {category.manufacturer}'s Masterpiece
            </span>
            <h1 className="text-3xl font-bold text-white">{category.name}</h1>
          </div>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            cumque laboriosam, aliquid consequuntur modi asperiores dolore nobis
            suscipit, deserunt animi repellendus harum iste ducimus et quia a
            eum nemo fugiat!
          </p>
          <h6 className="text-2xl font-semibold text-white">$ 19999.00</h6>
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
