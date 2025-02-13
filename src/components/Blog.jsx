import React, { useState } from "react";
import styled from "styled-components";

// Blog images
import blog1 from "../assets/blog/blog-1.jpg";
import blog2 from "../assets/blog/blog-2.jpg";
import blog3 from "../assets/blog/blog-3.jpg";
import blog4 from "../assets/blog/blog-4.jpg";
import blog5 from "../assets/blog/blog-5.jpg";
import blog6 from "../assets/blog/blog-6.jpg";

// Author images
import blogAuthor1 from "../assets/blog/blog-author-1.jpg";
import blogAuthor2 from "../assets/blog/blog-author-2.jpg";
import blogAuthor3 from "../assets/blog/blog-author-3.jpg";
import blogAuthor4 from "../assets/blog/blog-author-4.jpg";
import blogAuthor5 from "../assets/blog/blog-author-5.jpg";
import blogAuthor6 from "../assets/blog/blog-author-6.jpg";

// Comment images
import comment1 from "../assets/blog/comments-1.jpg";
import comment2 from "../assets/blog/comments-2.jpg";
import comment3 from "../assets/blog/comments-3.jpg";
import comment4 from "../assets/blog/comments-4.jpg";
import comment5 from "../assets/blog/comments-5.jpg";
import comment6 from "../assets/blog/comments-6.jpg";

const Blog = () => {
  const [hoveredPost, setHoveredPost] = useState(null);

  const posts = [
    {
      id: 1,
      image: blog1,
      role: "Frontend Developer",
      desc: "Building responsive UI with modern frameworks.",
      author: { name: "John Doe", avatar: blogAuthor1, date: "Jan 1, 2022" },
      comment: { name: "Alice", text: "Great work!", image: comment1 },
    },
    {
      id: 2,
      image: blog2,
      role: "Backend Engineer",
      desc: "Optimizing APIs for scalable performance.",
      author: { name: "Jane Smith", avatar: blogAuthor2, date: "Feb 10, 2022" },
      comment: { name: "Bob", text: "Impressive insights!", image: comment2 },
    },
    {
      id: 3,
      image: blog3,
      role: "UI/UX Designer",
      desc: "Crafting intuitive and engaging user experiences.",
      author: { name: "Michael Lee", avatar: blogAuthor3, date: "Mar 5, 2022" },
      comment: { name: "Charlie", text: "I love the design!", image: comment3 },
    },
    {
      id: 4,
      image: blog4,
      role: "Full-Stack Developer",
      desc: "Bridging the gap between front-end and back-end.",
      author: {
        name: "Sarah Connor",
        avatar: blogAuthor4,
        date: "Apr 12, 2022",
      },
      comment: { name: "David", text: "Very informative!", image: comment4 },
    },
    {
      id: 5,
      image: blog5,
      role: "DevOps Engineer",
      desc: "Automating deployments with CI/CD pipelines.",
      author: {
        name: "David Brown",
        avatar: blogAuthor5,
        date: "May 22, 2022",
      },
      comment: { name: "Emma", text: "Super useful tips!", image: comment5 },
    },
    {
      id: 6,
      image: blog6,
      role: "Data Scientist",
      desc: "Uncovering insights through data analysis.",
      author: { name: "Emily White", avatar: blogAuthor6, date: "Jun 8, 2022" },
      comment: { name: "Frank", text: "Thanks for sharing!", image: comment6 },
    },
  ];

  return (
    <Wrapper id="blog">
      <div className="head">
        <h2 className="title">Recent Posts</h2>
        <h3 className="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          pariatur.
        </h3>
      </div>

      <PostDiv>
        {posts.map((post) => (
          <Post
            key={post.id}
            onMouseEnter={() => setHoveredPost(post.id)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            <div className="image">
              <img src={post.image} alt="Post Thumbnail" />
            </div>
            <div className="card-details">
              <h4 className="role">{post.role}</h4>
              <p className="desc">{post.desc}</p>
              <div className="details">
                <div className="details-image">
                  <img src={post.author.avatar} alt={post.author.name} />
                </div>
                <div className="details-intro">
                  <h3 className="name">{post.author.name}</h3>
                  <div className="dob">{post.author.date}</div>
                </div>
              </div>
            </div>

            {hoveredPost === post.id && (
              <CommentBox>
                <div className="comment-img">
                  <img src={post.comment.image} alt="Commenter" />
                </div>
                <div className="comment-text">
                  <h4>{post.comment.name}</h4>
                  <p>{post.comment.text}</p>
                </div>
              </CommentBox>
            )}
          </Post>
        ))}
      </PostDiv>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: auto;
`;

const PostDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 468px) {
    grid-template-columns: 1fr;
  }
`;

const Post = styled.article`
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
  text-align: left;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(255, 255, 255, 0.2);
  }

  .card-details {
    padding: 0 1.5rem 1rem 1.5rem;
  }

  .image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px 8px 0px 0px;
  }

  .role {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: #ddd;
  }

  .desc {
    margin-top: 0.5rem;
    font-size: 1rem;
    font-size: 700;
  }

  .details {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    gap: 0.8rem;
  }

  .details-image img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

const CommentBox = styled.div`
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  padding: 0.7rem;
  border-radius: 8px;
  text-align: center;
  min-width: 200px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);

  .comment-img img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .comment-text h4 {
    margin: 0;
    font-size: 1rem;
    color: white;
  }

  .comment-text p {
    margin: 0;
    font-size: 0.9rem;
    color: #ddd;
  }
`;

export default Blog;
