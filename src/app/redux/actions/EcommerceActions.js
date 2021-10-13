import axios from "axios";

export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
export const GET_CART_LIST = "GET_CART_LIST";
export const GET_FORNISSUER_LIST = "GET_FORNISSUER_LIST";
export const GET_RATING_LIST = "GET_RATING_LIST";
export const GET_SOUS_GAMME_LIST = "GET_SOUS_GAMME_LIST";
export const GET_GAMME_LIST = "GET_GAMME_LIST";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const GET_UNIT_LIST = "GET_UNIT_LIST";
export const UPDATE_CART_AMOUNT = "UPDATE_CART_AMOUNT";
export const SAVE_PRODUCT = "SAVE_PRODUCT";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const GET_FORNISSUER_BY_NAME = "GET_FORNISSUER_BY_NAME";
export const SAVE_FOURNISSEUR = "SAVE_FOURNISSEUR";
export const DELETE_FOURNISSEUR = "DELETE_FOURNISSEUR";

export const URL_API = "http://localhost:8070";

export const getProductList = () => (dispatch) => {
  axios.get("/api/ecommerce/get-product-list").then((res) => {
    dispatch({
      type: GET_PRODUCT_LIST,
      payload: res.data,
    });
  });
};

export const getFornisseurList = () => (dispatch) => {
  axios.get(`${URL_API}/manager/fournisseurs`).then((res) => {
    dispatch({
      type: GET_FORNISSUER_LIST,
      payload: res.data,
    });
  });
};

export const saveProduct = (values) => (dispatch) => {
  return new Promise((resolve) => {
    axios.post(`${URL_API}/manager/products`, values).then((res) => {
      dispatch({
        type: SAVE_PRODUCT,
        payload: res.data,
      });
      resolve(res.data);
    });
  });
};
export const saveFournisseur = (values) => (dispatch) => {
  return new Promise((resolve) => {
    axios.post(`${URL_API}/manager/saveFournisseur`, values).then((res) => {
      dispatch({
        type: SAVE_FOURNISSEUR,
        payload: res.data,
      });
      resolve(res.data);
    });
  });
};
export const searchProducts = (values) => (dispatch) => {
  return new Promise((resolve) => {
    axios.post(`${URL_API}/manager/productsCriteria`, values).then((res) => {
      dispatch({
        type: SEARCH_PRODUCT,
        payload: res.data,
      });
      resolve(res.data);
    });
  });
};

export const getFournisseurByName = (nom) => (dispatch) => {
  return new Promise((resolve) => {
    axios.get(`${URL_API}/manager/findFournisseurByName/${nom}`).then((res) => {
      dispatch({
        type: GET_FORNISSUER_BY_NAME,
        payload: res.data,
      });
      resolve(res.data);
    });
  });
};
export const getGammeList = () => (dispatch) => {
  axios.get(`${URL_API}/manager/gammes`).then((res) => {
    dispatch({
      type: GET_GAMME_LIST,
      payload: res.data,
    });
  });
};

export const getSousGamme = () => (dispatch) => {
  axios.get(`${URL_API}/manager/sousgammes`).then((res) => {
    dispatch({
      type: GET_SOUS_GAMME_LIST,
      payload: res.data,
    });
  });
};
export const getUnits = () => (dispatch) => {
  axios.get(`${URL_API}/manager/units`).then((res) => {
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

export const deleteProduit = (idProduit) => (dispatch) => {
  axios.delete(`${URL_API}/manager/products/${idProduit}`).then((res) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: res.data,
    });
  });
};
export const deleteFournisseur = (idFournisseur) => (dispatch) => {
  axios
    .delete(`${URL_API}/manager/fournisseur/${idFournisseur}`)
    .then((res) => {
      dispatch({
        type: DELETE_FOURNISSEUR,
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
