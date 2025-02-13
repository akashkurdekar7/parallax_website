import React, { useState } from "react";
import styled from "styled-components";

// Portfolio images
import app from "../assets/portfolio/app-1.jpg";
import books from "../assets/portfolio/books-1.jpg";
import branding from "../assets/portfolio/branding-1.jpg";
import product from "../assets/portfolio/product-1.jpg";

// Masonry Portfolio images
import masonry1 from "../assets/masonry-portfolio/masonry-portfolio-1.jpg";
import masonry2 from "../assets/masonry-portfolio/masonry-portfolio-2.jpg";
import masonry3 from "../assets/masonry-portfolio/masonry-portfolio-3.jpg";
import masonry4 from "../assets/masonry-portfolio/masonry-portfolio-4.jpg";
import masonry5 from "../assets/masonry-portfolio/masonry-portfolio-5.jpg";
import masonry6 from "../assets/masonry-portfolio/masonry-portfolio-6.jpg";
import masonry7 from "../assets/masonry-portfolio/masonry-portfolio-7.jpg";
import masonry8 from "../assets/masonry-portfolio/masonry-portfolio-8.jpg";
import masonry9 from "../assets/masonry-portfolio/masonry-portfolio-9.jpg";

const Portfolio = () => {
  const list = [
    {
      name: "All",
      src: [
        app,
        books,
        branding,
        product,
        masonry1,
        masonry2,
        masonry3,
        masonry4,
        masonry5,
        masonry6,
        masonry7,
        masonry8,
        masonry9,
      ],
    },
    {
      name: "App",
      src: [app],
    },
    {
      name: "Card",
      src: [books],
    },
    {
      name: "Web",
      src: [branding],
    },
    {
      name: "Product",
      src: [product],
    },
    {
      name: "Masonry",
      src: [
        masonry1,
        masonry2,
        masonry3,
        masonry4,
        masonry5,
        masonry6,
        masonry7,
        masonry8,
        masonry9,
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const selectedImages =
    list.find((category) => category.name === selectedCategory)?.src || [];

  return (
    <Wrapper id="portfolio">
      <h1 className="title">Portfolio</h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, harum!
      </p>

      <SearchContainer>
        {list.map((category, index) => (
          <Category key={index}>
            <button
              className={selectedCategory === category.name ? "active" : ""}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </button>
          </Category>
        ))}
      </SearchContainer>

      <ImageContainer>
        {selectedImages.map((src, idx) => (
          <div key={idx} className="box">
            <img src={src} alt={selectedCategory} />
          </div>
        ))}
      </ImageContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  padding: 2rem;
  height: auto;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Category = styled.div`
  button {
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    border-radius: 5px;
    border: 2px solid transparent;
  }

  .active {
    background-color: #e84545;
    color: white;
    border: 2px solid #e84545;
  }

  @media (max-width: 768px) {
    button {
      font-size: 0.9rem;
      padding: 0.5rem 1rem;
    }
  }

  @media (max-width: 480px) {
    button {
      font-size: 0.8rem;
      padding: 0.4rem 0.8rem;
    }
  }
`;

const ImageContainer = styled.div`
  margin: 20px auto;
  gap: 1rem;
  columns: 4;
  column-gap: 20px;
  max-width: 1440px;

  .box {
    width: 100%;
    margin-bottom: 10px;
    break-inside: avoid;
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1200px) {
    columns: 3;
  }
  @media (max-width: 768px) {
    columns: 2;
    gap: 10px;
  }
  @media (max-width: 480px) {
    columns: 1;
  }
`;

export default Portfolio;
