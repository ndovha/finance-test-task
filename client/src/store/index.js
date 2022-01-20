import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import tickers from '../modules/finance/finance.reducer';

export const rootReducer = combineReducers({
    tickers
});

export const store = createStore(rootReducer, applyMiddleware(thunk));