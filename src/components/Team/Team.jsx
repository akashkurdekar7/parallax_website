import React from "react";
import "./Team.css";
import team1 from "../../assets/team/team-1.jpg";
import team2 from "../../assets/team/team-2.jpg";
import team3 from "../../assets/team/team-3.jpg";
import team4 from "../../assets/team/team-4.jpg";
import team5 from "../../assets/team/team-5.jpg";
import team6 from "../../assets/team/team-6.jpg";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Walter White",
      role: "Chief Executive Officer",
      desc: "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow",
      image: team1,
    },
    {
      id: 2,
      name: "Sarah Jhonson",
      role: "Product Manager",
      desc: "Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut",
      image: team2,
    },
    {
      id: 3,
      name: "William Anderson",
      role: "CTO",
      desc: "Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui",
      image: team3,
    },
    {
      id: 4,
      name: "Amanda Jepson",
      role: "Accountant",
      desc: "Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur",
      image: team4,
    },
    {
      id: 5,
      name: "Brian Doe",
      role: "Marketing",
      desc: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit",
      image: team5,
    },
    {
      id: 6,
      name: "Josepha Palas",
      role: "Operation",
      desc: "Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel",
      image: team6,
    },
  ];
  return (
    <section id="team" className="container">
      <div className="text-center">
        <h2 className="fs-2">Our Team</h2>
        <p className="fs-4">
          Meet the talented individuals behind our success.
        </p>
      </div>

      <div className="container-fluid">
        <div className="row row-gap-4">
          {teamMembers.map((member) => (
            <div className="col-12 col-sm-6 col-lg-4" key={member.id}>
              <div className="card h-100 text-center">
                <img
                  className="card-img-top"
                  loading="lazy"
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                />
                <div className="card-body">
                  <h2
                    className="card-title fw-normal"
                    style={{ height: "3rem" }}
                  >
                    {member.name}
                  </h2>
                  <span className="fs-6 fw-bold">{member.role}</span>
                  <p className="card-text mt-2">{member.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
