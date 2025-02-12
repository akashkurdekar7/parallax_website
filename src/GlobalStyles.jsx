import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #E84545;  
    --secondary-color: #FF9292; 
    --text-light: #ffffff;
    --text-dark: #000000;
    --background-dark: #141414; 
    --background-light: #f1f1f1;  
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    background-color: var(--background-light);
    color: var(--text-light);
    transition: all 0.3s ease-in-out;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 3rem;
    color: var(--primary-color);
  }

  h2 {
    font-size: 2.5rem;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    color: var(--secondary-color);
  }

  button {
    padding: 0.75em 1.5em;
    font-size: 1em;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background-color: var(--primary-color);
    color: var(--text-light);
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    background-color: var(--secondary-color);
  }

  section {
    padding: 80px 20px;
    text-align: center;
  }

  @media (max-width: 768px) {
    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }
    section { padding: 60px 15px; }
  }
`;

export default GlobalStyles;
