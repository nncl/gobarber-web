import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.min.css';
import 'react-toastify/dist/ReactToastify.min.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  *:focus {
    outline: 0;
  }
  
  html,
  body,
  #root {
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }
  
  body,
  input,
  button {
    font: 14px 'Roboto', sans-serif;
  }
  
  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  button {
    cursor: pointer;
  }
`;
