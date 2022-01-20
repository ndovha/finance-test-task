import { FETCH_TICKERS } from "./finance.constants";

// const tickers = { ticker: [] };

const initialState = {
    loading: false,
    ticker: [],
    error: null
  };



export default function tikersReducer(state = initialState, {type, payload}) {
    switch (type) {
        case FETCH_TICKERS:
          return { 
            ...state,
            ticker: payload.data,
            loading: true
          };
        default:
          return state;
      }
}