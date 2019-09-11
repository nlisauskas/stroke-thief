import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import './stylesheets/index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Provider } from 'react-redux';


const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
    const render = () => {
      fancyLog();
      ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
  };

    render();
    store.subscribe(render);

    function fancyLog() {
      console.log("%c Rendered with 👉 👉👇", "background: purple; color: #fff");
      console.log(store.getState());
    }
