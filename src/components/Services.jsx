import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBinoculars,
  faBriefcase,
  faCalendarAlt,
  faChartBar,
  faClipboardList,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: faBriefcase,
      title: "Business Solutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      icon: faClipboardList,
      title: "Project Management",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      icon: faChartBar,
      title: "Data Analytics",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 4,
      icon: faBinoculars,
      title: "Market Research",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 5,
      icon: faSun,
      title: "Creative Solutions",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
    {
      id: 6,
      icon: faCalendarAlt,
      title: "Event Planning",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
  ];

  return (
    <Wrapper id="services">
      <h1 className="title">Services</h1>
      <p className="subtitle">
        Discover our range of professional services tailored to your needs.
      </p>
      <List>
        {servicesData.map(({ id, icon, title, description }) => (
          <Box key={id}>
            <div className="icon-box">
              <FontAwesomeIcon
                className="icon"
                icon={icon}
                aria-label={title}
              />
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </Box>
        ))}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: auto;
  padding: 4rem 2rem;
  text-align: center;

  .subtitle {
    max-width: 600px;
    margin: 0 auto 2rem;
  }
`;

const List = styled.div`
  display: grid;
  width: 80%;
  place-self: center;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

const Box = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: -5px;
    width: 5%;
    height: 2px;
    background-color: ${({ theme }) => theme.primaryColor};
  }

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 7%;
    width: 93%;
    height: 2px;
    background-color: ${({ theme }) => theme.backgroundDark};
  }
  &:hover {
    transform: scale(1.05);
  }

  .icon-box {
    position: relative;
    &::before {
      content: "";
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.secondaryColor};
      opacity: 65%;
      position: absolute;
      bottom: -6px;
      right: -15px;
      z-index: 2;
    }
  }

  .icon {
    width: 50px;
    height: 50px;
  }

  .content {
    text-align: left;
  }

  .content h4 {
    margin: 0;
    font-size: 1.2rem;
  }

  .content p {
    margin: 0;
    font-size: 0.9rem;
    text-align: justify;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    gap: 1rem;
  }
`;

export default Services;
