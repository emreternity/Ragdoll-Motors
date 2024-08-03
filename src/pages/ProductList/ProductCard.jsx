import React from "react";

function ProductCard(props) {
  return (
    <li>
      <a href="#" className="group block overflow-hidden">
        <img
          src={props.frontQuarter}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="relative bg-white py-3">
          <h3 className="text-xs text-black group-hover:underline group-hover:underline-offset-4 ml-3">
            {props.model}
          </h3>

          <p className="mt-2">
            <span className="sr-only"> Regular Price </span>

            <span className="tracking-wider text-orange-500 ml-2">
              {"$"}
              {props.price}{" "}
            </span>
          </p>
        </div>
      </a>
    </li>
  );
}

export default ProductCard;
