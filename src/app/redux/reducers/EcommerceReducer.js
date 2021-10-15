import {
  GET_PRODUCT_LIST,
  GET_CART_LIST,
  ADD_PRODUCT_TO_CART,
  UPDATE_CART_AMOUNT,
  GET_FORNISSUER_LIST,
  GET_GAMME_LIST,
  GET_SOUS_GAMME_LIST,
  GET_UNIT_LIST,
  SEARCH_PRODUCT,
  GET_FORNISSUER_BY_NAME,
  GET_CHANTIER_DETAILS,
  SEARCH_CHANTIER,
} from "../actions/EcommerceActions";

const initialState = {
  productList: [],
  cartList: [],
  fournisseurs: [],
  fournisseursByName: [],
  gammes: [],
  sousGammes: [],
  unites: [],
  chantierDetails: [],
  chantierList: [],
};

const EcommerceReducer = function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_PRODUCT: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case SEARCH_CHANTIER: {
      return {
        ...state,
        chantierList: action.payload,
      };
    }
    case GET_PRODUCT_LIST: {
      return {
        ...state,
        productList: action.payload,
      };
    }
    case GET_FORNISSUER_LIST: {
      console.log("gggg", action.payload, action);
      return {
        ...state,
        fournisseurs: action.payload,
      };
    }
    case GET_GAMME_LIST: {
      return {
        ...state,
        gammes: action.payload,
      };
    }
    case GET_SOUS_GAMME_LIST: {
      return {
        ...state,
        sousGammes: action.payload,
      };
    }
    case GET_UNIT_LIST: {
      return {
        ...state,
        unites: action.payload,
      };
    }
    case GET_FORNISSUER_BY_NAME: {
      return {
        ...state,
        fournisseursByName: action.payload,
      };
    }

    case GET_CHANTIER_DETAILS: {
      return {
        ...state,
        chantierDetails: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default EcommerceReducer;
