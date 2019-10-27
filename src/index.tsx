import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { shoppingCartReducer } from './components/Data/ShopReducer';
import { authDataReducer } from './components/Data/AuthDataFldr/AuthData';

export type MainState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    shoppingCartReducer: shoppingCartReducer,
    authDataReducer: authDataReducer
});

const store = createStore(rootReducer);

store.subscribe(()=> {
    console.log('Subscription: ', store.getState())
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
