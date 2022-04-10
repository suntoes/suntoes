import React from 'react';
import { render } from 'react-dom'
import App from './App';
import { ColorModeScript } from '@chakra-ui/react';
import theme from "./lib/theme";


render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </React.StrictMode>, 
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals