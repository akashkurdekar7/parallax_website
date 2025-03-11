import React, { useState } from "react";
import "./Portfolio.css";

// Portfolio images
import app from "../../assets/portfolio/app-1.jpg";
import books from "../../assets/portfolio/books-1.jpg";
import branding from "../../assets/portfolio/branding-1.jpg";
import product from "../../assets/portfolio/product-1.jpg";

// Masonry Portfolio images
import masonry1 from "../../assets/masonry-portfolio/masonry-portfolio-1.jpg";
import masonry2 from "../../assets/masonry-portfolio/masonry-portfolio-2.jpg";
import masonry3 from "../../assets/masonry-portfolio/masonry-portfolio-3.jpg";
import masonry4 from "../../assets/masonry-portfolio/masonry-portfolio-4.jpg";
import masonry5 from "../../assets/masonry-portfolio/masonry-portfolio-5.jpg";
import masonry6 from "../../assets/masonry-portfolio/masonry-portfolio-6.jpg";
import masonry7 from "../../assets/masonry-portfolio/masonry-portfolio-7.jpg";
import masonry8 from "../../assets/masonry-portfolio/masonry-portfolio-8.jpg";
import masonry9 from "../../assets/masonry-portfolio/masonry-portfolio-9.jpg";

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
    <section id="portfolio" className="section">
      <div className="d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="font-sign">Portfolio</h3>
            <p className="font-mono">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
              debitis.
            </p>
          </div>
          <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center">
              {list.map((category, index) => (
                <div className="p-3 text-center" key={index}>
                  <button
                    type="button"
                    className="btn btn-danger text-capitalize"
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    {category.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="container-fluid image_cont">
            {selectedImages.length > 0 ? (
              selectedImages.map((src, idx) => (
                <div className="w-100 images" key={idx}>
                  <img
                    className="w-100 object-fit-cover rounded-4 mb-4 image"
                    src={src}
                    loading="lazy"
                    alt={selectedCategory}
                  />
                </div>
              ))
            ) : (
              <h3 className="text-center ">Loading</h3>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
