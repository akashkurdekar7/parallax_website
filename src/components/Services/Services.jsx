import React from "react";
import {
  AiOutlineSolution,
  AiOutlineProject,
  AiOutlineBarChart,
  AiOutlineSearch,
  AiOutlineBulb,
  AiOutlineCalendar,
} from "react-icons/ai";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: <AiOutlineSolution size={40} />,
      title: "Business Solutions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      icon: <AiOutlineProject size={40} />,
      title: "Project Management",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      icon: <AiOutlineBarChart size={40} />,
      title: "Data Analytics",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 4,
      icon: <AiOutlineSearch size={40} />,
      title: "Market Research",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 5,
      icon: <AiOutlineBulb size={40} />,
      title: "Creative Solutions",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
    {
      id: 6,
      icon: <AiOutlineCalendar size={40} />,
      title: "Event Planning",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
  ];

  return (
    <section
      className="container d-flex justify-content-center flex-column gap-5"
      id="services"
    >
      <div className="text-center mb-4">
        <h3 className="font-sign">Services</h3>
        <p className="font-mono">
          Discover our range of professional services tailored to your needs.
        </p>
      </div>

      <div className="row g-4">
        {servicesData.map(({ id, icon, title, description }) => (
          <div className="col-md-4 d-flex  text-center" key={id}>
            <div className="p-4 shadow rounded">
              <div className="text-primary mb-3">{icon}</div>
              <h4 className="fw-bold">{title}</h4>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
