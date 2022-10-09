import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import {createGlobalStyle} from "styled-components";
import store from './store/store'
import {Provider} from 'react-redux'

const Global = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Calibri;
}
`
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <Provider store={store}>
            <Global/>
              <App/>
        </Provider>
    </>
);

