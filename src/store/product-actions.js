import { productsActions } from "./products-slice";

export const fetchProductsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://gta.vercel.app/api/vehicles/class/muscle"
      );

      if (!response.ok) {
        throw new Error("Could not fetch products data");
      }
      const data = await response.json();

      return data;
    };
    try {
      const productsData = await fetchData();
      dispatch(productsActions.replaceProducts(productsData));
    } catch (error) {
      throw new Error("Fetching products data failed");
    }
  };
};
