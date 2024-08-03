import React from "react";
import ProductCard from "./ProductCard";

const PRODUCTS_LIST = [
  {
    images: {
      frontQuarter:
        "https://vignette.wikia.nocookie.net/gtawiki/images/1/1e/Vigero_GTAV_frontquarter.png/revision/latest/scale-to-width-down/210",
      rearQuarter:
        "https://vignette.wikia.nocookie.net/gtawiki/images/9/9b/Vigero_GTAV_rearquarter.png/revision/latest/scale-to-width-down/210",
      front:
        "https://vignette.wikia.nocookie.net/gtawiki/images/2/2a/Vigero_GTAV_front.png/revision/latest/scale-to-width-down/210",
      rear: "https://vignette.wikia.nocookie.net/gtawiki/images/5/56/Vigero_GTAV_rear.png/revision/latest/scale-to-width-down/210",
      side: "https://vignette.wikia.nocookie.net/gtawiki/images/8/87/Vigero_GTAV_side.png/revision/latest/scale-to-width-down/210",
    },
    manufacturer: "declasse",
    model: "vigero",
    seats: 2,
    price: 21000,
    topSpeed: {
      mph: 112,
      kmh: 180,
    },
    speed: 75.12,
    acceleration: 72.5,
    braking: 26.67,
    handling: 62.12,
  },
  {
    images: {
      frontQuarter:
        "https://vignette.wikia.nocookie.net/gtawiki/images/1/18/VirgoClassicCustom-GTAO-FrontQuarter.png/revision/latest/scale-to-width-down/210",
      rearQuarter:
        "https://vignette.wikia.nocookie.net/gtawiki/images/c/ce/VirgoClassicCustom-GTAO-RearQuarter.png/revision/latest/scale-to-width-down/210",
      front:
        "https://vignette.wikia.nocookie.net/gtawiki/images/b/b6/VirgoClassicCustom-GTAO-Front.png/revision/latest/scale-to-width-down/210",
      rear: "https://vignette.wikia.nocookie.net/gtawiki/images/9/93/VirgoClassicCustom-GTAO-Rear.png/revision/latest/scale-to-width-down/210",
      side: "https://vignette.wikia.nocookie.net/gtawiki/images/8/8a/VirgoClassicCustom-GTAO-Side.png/revision/latest/scale-to-width-down/210",
    },
    manufacturer: "dundreary",
    model: "virgo2",
    seats: 2,
    price: 240000,
    topSpeed: {
      mph: 104,
      kmh: 167,
    },
    speed: 71.9,
    acceleration: 52.5,
    braking: 23.33,
    handling: 62.12,
  },
  {
    images: {
      frontQuarter:
        "https://vignette.wikia.nocookie.net/gtawiki/images/d/d2/VirgoClassic-GTAO-FrontQuarter.png/revision/latest/scale-to-width-down/210",
      rearQuarter:
        "https://vignette.wikia.nocookie.net/gtawiki/images/c/c4/VirgoClassic-GTAO-RearQuarter.png/revision/latest/scale-to-width-down/210",
      front:
        "https://vignette.wikia.nocookie.net/gtawiki/images/0/0e/VirgoClassic-GTAO-Front.png/revision/latest/scale-to-width-down/210",
      rear: "https://vignette.wikia.nocookie.net/gtawiki/images/2/20/VirgoClassic-GTAO-Rear.png/revision/latest/scale-to-width-down/210",
      side: "https://vignette.wikia.nocookie.net/gtawiki/images/c/c9/VirgoClassic-GTAO-Side.png/revision/latest/scale-to-width-down/210",
    },
    manufacturer: "dundreary",
    model: "virgo3",
    seats: 2,
    price: 165000,
    topSpeed: {
      mph: 96,
      kmh: 154,
    },
    speed: 71.9,
    acceleration: 52.75,
    braking: 24,
    handling: 63.64,
  },
];

function ProductList() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-orange-500 sm:text-3xl">
              Product Collection
            </h2>

            <p className="mt-4 max-w-md text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <div className="mt-8">
            <p className="text-sm text-white">
              Showing <span> 4 </span> of 40
            </p>
          </div>

          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS_LIST.map((product) => (
              <ProductCard
                key={product.model}
                model={product.model}
                price={product.price}
                speed={product.speed}
                frontQuarter={product.images.frontQuarter}
                rearQuarter={product.rearQuarter}
                front={product.front}
                rear={product.rear}
                side={product.side}
                manufacturer={product.manufacturer}
                seats={product.seats}
                topSpeed={product.topSpeed}
                acceleration={product.acceleration}
                handling={product.handling}
              />
            ))}
          </ul>

          <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
            <li>
              <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-orange-500"
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block size-8 rounded border border-gray-100 bg-white text-orange-500 text-center leading-8"
              >
                1
              </a>
            </li>

            <li className="block size-8 rounded border-white bg-orange-500 text-center leading-8 text-white">
              2
            </li>

            <li>
              <a
                href="#"
                className="block size-8 rounded border border-gray-100 bg-white text-orange-500 text-center leading-8"
              >
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block size-8 rounded border border-gray-100 bg-white text-orange-500 text-center leading-8"
              >
                4
              </a>
            </li>

            <li>
              <a
                href="#"
                className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-orange-500"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

export default ProductList;
