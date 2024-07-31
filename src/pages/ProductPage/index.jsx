import React, { useState } from "react";

const ProductPage = (props) => {
  const [images, setImages] = useState({
    img1: "https://www.auto-data.net/images/f38/Dodge-Challenger-III_2.jpg",
    img2: "https://www.auto-data.net/images/f126/Dodge-Challenger-III.jpg",
    img3: "https://www.auto-data.net/images/f41/Dodge-Challenger-III.jpg",
    img4: "https://www.auto-data.net/images/f62/Dodge-Challenger-III.jpg",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

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
              Dodge's Masterpiece
            </span>
            <h1 className="text-3xl font-bold text-white">
              2008 Challenger III
            </h1>
          </div>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            cumque laboriosam, aliquid consequuntur modi asperiores dolore nobis
            suscipit, deserunt animi repellendus harum iste ducimus et quia a
            eum nemo fugiat!
          </p>
          <h6 className="text-2xl font-semibold text-white">$ 19999.00</h6>
          <div className="flex flex-row items-center gap-12 py-3">
            <button className="bg-orange-500 hover:bg-orange-200 text-orange-200 hover:text-orange-500 font-semibold py-3 px-16 rounded-xl h-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
