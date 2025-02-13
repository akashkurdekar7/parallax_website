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
            <button onClick={() => setSelectedCategory(category.name)}>
              {category.name}
            </button>
          </Category>
        ))}
      </SearchContainer>

      <ImageContainer>
        {selectedImages.map((src, idx) => (
          <div className="box">
            <img key={idx} src={src} alt={selectedCategory} />
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
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  /* margin-top: 2rem; */
  margin: 20px auto;
  /* display: flex;
  justify-content: center;
  flex-wrap: wrap; */
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
    max-width: 100%;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1200px) {
    width: calc(100%-40px);
    columns: 3;
  }
  @media (max-width: 768px) {
    columns: 2;
  }
  @media (max-width: 480px) {
    columns: 1;
  }
`;

export default Portfolio;
