import axios from "axios";
import { getServer } from "../util";
import { GET_PRODUCTS,PRODUCT_ERROR,GET_PRODUCT } from "./types";

export const getProducts = () => async dispatch =>{
    try {
            const res =await axios.get(`${getServer()}/api/products`);
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: PRODUCT_ERROR,
            payload: {status: err.response.status},
        });
    }
};

export const getProduct=(id)=>async dispatch=>{
    try {
      await axios
      .get(`${getServer()}/api/products/${id}`)
      .then((res)=>
        dispatch({
          type: GET_PRODUCT,
          payload: res.data,
        }));
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: {status: err.response},
      });
    }
  }