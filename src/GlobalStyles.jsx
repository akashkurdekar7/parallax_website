import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #E84545;  
    --secondary-color: #FF9292; 
    --text-light: #ffffff;
    --text-dark: #000000;
    --background-dark: #141414; 
    --background-light: #f1f1f1;  
    --title-font: 2rem;
    --subtitle-font: 1.3rem;
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
    color: var(--text-dark);
    transition: all 0.3s ease-in-out;
  }

  html {
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 1.2;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  ul, li, dl {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--primary-color);
    }
  }

button {
    padding: 0.5rem 1.5rem;
    font-size: 14px;
    font-weight: 500;
    border: none;
    letter-spacing: 0.25px;
    border-radius: 8px;
    cursor: pointer;
    text-transform: capitalize;
    width: max-content;
    background-color: var(--primary-color);
    color: var(--text-light);
    transition: 
        box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 150ms linear, 
        transform 270ms cubic-bezier(0, 0, 0.2, 1);

    &:hover {
        background-color: var(--secondary-color);
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(1px);
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    }
}


  section {
    height: 100vh;
    padding: 2rem 15rem;
  }

  @media (max-width: 768px) {
    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }
    section { padding: 60px 15px; }
  }

  .title {
    text-transform: capitalize;
    text-align: center;
    font-size: var(--title-font);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: var(--text-dark);
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: var(--subtitle-font);
    color: var(--text-dark);
    margin-bottom: 10px;
    text-align: center;
  }

  .title::before,
  .title::after {
    content: "";
    display: block;
    width: 10%;
    height: 2px;
    background-color: var(--primary-color);
  }

  img {
    object-fit: cover;
    max-width: 100%;
    height: auto;
  }

  .icon{
    cursor: pointer;
    transition: all .3s ease-in-out;
  }
`;

export default GlobalStyles;
