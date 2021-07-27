import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  header{
    font-family: 'Herr Von Muellerhoff', cursive;
    font-size:80px;
    font-weight:bold;
    color:#2b8068;
    line-height:0.8;
    width:440px;
    text-align: start;
    @media (max-width: 768px) {
        text-align: center;
        width:initial;   
  }
  }
`

ReactDOM.render(
  <>
    <GlobalStyle/>
    <App />
  
  </>,
  document.getElementById('root')
);


