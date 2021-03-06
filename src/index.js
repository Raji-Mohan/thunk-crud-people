import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './reducers/reducer'
import App from './containers/App';

const middleware = applyMiddleware(thunk)
const store= createStore(reducer, middleware)

ReactDOM.render(<Provider store = {store}>
<App />
</Provider>,
document.getElementById('root'));

