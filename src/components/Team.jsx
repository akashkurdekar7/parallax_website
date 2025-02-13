import React from "react";
import styled from "styled-components";
import team1 from "../assets/team/team-1.jpg";
import team2 from "../assets/team/team-2.jpg";
import team3 from "../assets/team/team-3.jpg";
import team4 from "../assets/team/team-4.jpg";
import team5 from "../assets/team/team-5.jpg";
import team6 from "../assets/team/team-6.jpg";

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

const Team = () => {
  return (
    <Wrapper>
      <div className="head">
        <h2 className="title">Our Team</h2>
        <h3 className="subtitle">
          Meet the talented individuals behind our success.
        </h3>
      </div>

      <People>
        {teamMembers.map((member) => (
          <Person key={member.id}>
            <div className="image">
              <img src={member.image} alt={`${member.name} - ${member.role}`} />
            </div>
            <h2 className="name">{member.name}</h2>
            <h4 className="role">{member.role}</h4>
            <p className="desc">{member.desc}</p>
          </Person>
        ))}
      </People>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: auto;
  padding: 4rem 2rem;
`;

const People = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Person = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .image img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid #ddd;
  }

  .name {
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  .role {
    font-size: 1rem;
    color: gray;
    font-style: italic;
  }

  .desc {
    margin-top: 10px;
    font-size: 0.9rem;
    color: #666;
  }
`;

export default Team;
