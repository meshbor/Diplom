import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/app.jsx';
import reportWebVitals from './reportWebVitals';
import { PostPage } from './components/Page/PostPage/postPage.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App />
</BrowserRouter>

import App from '../src/components/App/app';
import reportWebVitals from './reportWebVitals';
import { createRootApp } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PostPage } from './components/page/postPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>

//  <PostPage/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
