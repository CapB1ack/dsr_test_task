import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from 'src/store';
import App from './App';

const store = configureStore({
    xxx: true
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
