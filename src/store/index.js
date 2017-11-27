import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import io from 'socket.io-client';
/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './rootReducer';


console.log(process.env);
let enhancers = [];

if (process.env.NODE_ENV === 'development') {
  enhancers = [
    devToolsEnhancer(),
    ...enhancers,
  ];
}

const store = createStore(
  rootReducer(),
  compose(applyMiddleware(thunk), ...enhancers),
);

const socket = io('http://nstfkc.com:5050');
socket.on('home', (data) => {
  store.dispatch({
    type: 'UPDATE',
    payload: data,
  });
});

export default store;
