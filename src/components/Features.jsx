import React from "react";
import styled from "styled-components";

const Features = () => {
  return (
    <Wrapper>
      <h1 className="title">features</h1>
      <h3 className="secondary-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, esse.
      </h3>

      <div className="con">
        <div className="box1">
          <div className="content">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ut qui optio dignissimos vel ad. Unde porro sapiente cum explicabo
              dicta rerum, non aut quam!
            </p>
            <button>Get Started</button>
          </div>
          <div className="image">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className="box2">
          <div className="image">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <div className="content">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ut qui optio dignissimos vel ad. Unde porro sapiente cum explicabo
              dicta rerum, non aut quam!
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: auto !important;
`;
export default Features;
