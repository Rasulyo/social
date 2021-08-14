import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

 const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App appState={store.getState()} addPost={store.addPost} addMessage={store.addMessage} updateMessage={store.updateMessage} updatePostText={store.updatePostText} />,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree)

