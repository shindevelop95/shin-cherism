import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body{
      
        font-size:62.5%;

        @media only screen and (max-width: 1300px) {
            font-size: 56.25%;
        }

        @media only screen and (max-width: 1000px) {
            font-size: 50%;
        }

        @media only screen and (max-width: 400px) {
            font-size: 37.5%;
        }
    }
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


