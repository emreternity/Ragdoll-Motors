import { productsActions } from "./products-slice";

export const fetchMuscleData = () => {
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
      dispatch(productsActions.replaceProductsMuscle(productsData));
    } catch (error) {
      throw new Error("Fetching products data failed");
    }
  };
};

export const fetchSportsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://gta.vercel.app/api/vehicles/class/sports"
      );

      if (!response.ok) {
        throw new Error("Could not fetch products data");
      }
      const data = await response.json();

      return data;
    };
    try {
      const productsData = await fetchData();
      dispatch(productsActions.replaceProductsSports(productsData));
    } catch (error) {
      throw new Error("Fetching products data failed");
    }
  };
};

export const fetchMotorcyclesData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://gta.vercel.app/api/vehicles/class/motorcycles"
      );

      if (!response.ok) {
        throw new Error("Could not fetch products data");
      }
      const data = await response.json();

      return data;
    };
    try {
      const productsData = await fetchData();
      dispatch(productsActions.replaceProductsMotorcycles(productsData));
    } catch (error) {
      throw new Error("Fetching products data failed");
    }
  };
};

export const fetchSingleData = (model) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://gta.vercel.app/api/vehicles/${model}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch products data");
      }
      const data = await response.json();

      return data;
    };
    try {
      const productsData = await fetchData();
      dispatch(productsActions.replaceProductsSingle(productsData));
    } catch (error) {
      throw new Error("Fetching products data failed");
    }
  };
};
