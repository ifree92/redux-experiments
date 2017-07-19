import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from "redux";
import reducer from "./redux/reducer";
import './index.css';

const store = createStore(reducer);
store.sometext = "hello world";

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
