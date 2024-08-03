import React from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMotorcyclesData } from "../../store/product-actions";
import { fetchMuscleData } from "../../store/product-actions";
import { fetchSportsData } from "../../store/product-actions";
import { Link } from "react-router-dom";

function ProductList() {
  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch(fetchMuscleData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMotorcyclesData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSportsData());
  }, [dispatch]);

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

  const PRODUCT_LIST = Object.values(productChoose());

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-orange-500 sm:text-3xl">
              {params.productCategory.charAt(0).toUpperCase() +
                params.productCategory.slice(1)}{" "}
              Collection
            </h2>

            <p className="mt-4 max-w-md text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCT_LIST.map((product) => (
              <Link to={"/products/" + product.model}>
                <ProductCard
                  model={product.model}
                  price={product.price}
                  speed={product.speed}
                  frontQuarter={product.images.frontQuarter}
                  rearQuarter={product.images.rearQuarter}
                  front={product.images.front}
                  rear={product.images.rear}
                  side={product.images.side}
                  manufacturer={product.manufacturer}
                  seats={product.seats}
                  topSpeed={product.topSpeed}
                  acceleration={product.acceleration}
                  handling={product.handling}
                />
              </Link>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ProductList;
