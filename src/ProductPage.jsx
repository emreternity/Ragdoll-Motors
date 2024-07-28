import React, { useState } from "react";

const ProductPage = () => {
  const [images, setImages] = useState({
    img1: "https://www.auto-data.net/images/f38/Dodge-Challenger-III_2.jpg",
    img2: "https://www.auto-data.net/images/f126/Dodge-Challenger-III.jpg",
    img3: "https://www.auto-data.net/images/f41/Dodge-Challenger-III.jpg",
    img4: "https://www.auto-data.net/images/f62/Dodge-Challenger-III.jpg",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);

  return (
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
          <span className=" text-orange-600 font-semibold">
            Dodge's Masterpiece
          </span>
          <h1 className="text-3xl font-bold">2008 Challenger III</h1>
        </div>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          cumque laboriosam, aliquid consequuntur modi asperiores dolore nobis
          suscipit, deserunt animi repellendus harum iste ducimus et quia a eum
          nemo fugiat!
        </p>
        <h6 className="text-2xl font-semibold">$ 19999.00</h6>
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center">
            <button
              className="bg-gray-200 py-2 px-5 rounded-lg text-orange-500 text-3xl"
              onClick={() => setAmount((prev) => prev - 1)}
            >
              -
            </button>
            <span className="py-4 px-6 rounded-lg">{amount}</span>
            <button
              className="bg-gray-200 py-2 px-4 rounded-lg text-orange-500 text-3xl"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button className="bg-orange-500 text-white font-semibold py-3 px-16 rounded-xl h-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
