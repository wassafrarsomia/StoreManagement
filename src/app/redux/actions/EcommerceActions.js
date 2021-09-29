import axios from "axios";

export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
export const GET_CART_LIST = "GET_CART_LIST";
export const GET_FORNISSUER_LIST = "GET_FORNISSUER_LIST";
export const GET_RATING_LIST = "GET_RATING_LIST";
export const GET_SOUS_GAMME_LIST = "GET_SOUS_GAMME_LIST";
export const GET_GAMME_LIST ="GET_GAMME_LIST"
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";
export const GET_UNIT_LIST="GET_UNIT_LIST"
export const UPDATE_CART_AMOUNT = "UPDATE_CART_AMOUNT";
export const SAVE_PRODUCT ='SAVE_PRODUCT'
export const getProductList = () => (dispatch) => {
  axios.get("/api/ecommerce/get-product-list").then((res) => {
    dispatch({
      type: GET_PRODUCT_LIST,
      payload: res.data,
    });
  });
};

export const getFornisseurList = () => (dispatch) => {
  axios.get("http://localhost:8080/manager/fournisseurs").then((res) => {
    dispatch({
      type: GET_FORNISSUER_LIST,
      payload: res.data,
    });
  });
};
export const saveProduct = (values) => (dispatch) => {
  axios.post("http://localhost:8080/manager/products",values).then((res) => {
    dispatch({
      type: SAVE_PRODUCT,
      payload: res.data,
    });
    return res.data
  });
};
export const getGammeList = () => (dispatch) => {
  axios.get("http://localhost:8080/manager/gammes").then((res) => {
    dispatch({
      type: GET_GAMME_LIST,
      payload: res.data,
    });
  });
};

export const getSousGamme = () => (dispatch) => {
  axios.get("http://localhost:8080/manager/sousgammes").then((res) => {
    dispatch({
      type: GET_SOUS_GAMME_LIST,
      payload: res.data,
    });
  });
};
export const getUnits = () => (dispatch) => {
  axios.get("http://localhost:8080/manager/units").then((res) => {
    dispatch({
      type: GET_UNIT_LIST,
      payload: res.data,
    });
  });
};

export const getCartList = (uid) => (dispatch) => {
  axios.get("/api/ecommerce/get-cart-list", { data: uid }).then((res) => {
    dispatch({
      type: GET_CART_LIST,
      payload: res.data,
    });
  });
};

export const addProductToCart = (uid, productId) => (dispatch) => {
  axios.post("/api/ecommerce/add-to-cart", { uid, productId }).then((res) => {
    console.log(res.data);
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: res.data,
    });
  });
};

export const deleteProductFromCart = (uid, productId) => (dispatch) => {
  axios
    .post("/api/ecommerce/delete-from-cart", { uid, productId })
    .then((res) => {
      dispatch({
        type: DELETE_PRODUCT_FROM_CART,
        payload: res.data,
      });
    });
};

export const updateCartAmount = (uid, productId, amount) => (dispatch) => {
  console.log(uid, productId, amount);
  axios
    .post("/api/ecommerce/update-cart-amount", { uid, productId, amount })
    .then((res) => {
      dispatch({
        type: UPDATE_CART_AMOUNT,
        payload: res.data,
      });
    });
};
