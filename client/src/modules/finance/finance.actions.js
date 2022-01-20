import { FETCH_TICKERS } from "./finance.constants";

export const getTickers = (payload) => async (dispatch) => {
    dispatch({ type: FETCH_TICKERS, payload });
}