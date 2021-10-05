import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllproducts } from "../redux/slices/productSlice";
import axios from "axios";
export const useFetchProducts = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      baseURL: "https://fakestoreapi.com",
      url: "/products",
    })
      .then(({ data }) => {
        console.log(data);
        dispatch(getAllproducts(data));
      })
      .catch((err) => console.dir(err))
      .finally(() => setLoading(false));
  }, []);

  return [loading];
};
