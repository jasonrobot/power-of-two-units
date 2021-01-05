// React
import React from 'react';
import ReactDOM from 'react-dom';

//Redux and stuff
import {
    applyMiddleware,
    createStore,
} from 'redux';
// import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';

// Ramda

// My Stuff
import Main from './Main';

import rootReducer, {
    initialState
} from './Reducer';

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
        // thunkMiddleware,
        createLogger(),
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider >,
    document.getElementById('root'),
);

// ReactDOM.render(
//     h(Provider, {store}, [
//         h(Main)
//     ]),
//     document.getElementById('root')
// );
