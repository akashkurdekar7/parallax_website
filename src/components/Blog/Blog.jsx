import React, { useState } from "react";
import "./Blog.css";

// Blog images
import blog1 from "../../assets/blog/blog-1.jpg";
import blog2 from "../../assets/blog/blog-2.jpg";
import blog3 from "../../assets/blog/blog-3.jpg";
import blog4 from "../../assets/blog/blog-4.jpg";
import blog5 from "../../assets/blog/blog-5.jpg";
import blog6 from "../../assets/blog/blog-6.jpg";

// Author images
import blogAuthor1 from "../../assets/blog/blog-author-1.jpg";
import blogAuthor2 from "../../assets/blog/blog-author-2.jpg";
import blogAuthor3 from "../../assets/blog/blog-author-3.jpg";
import blogAuthor4 from "../../assets/blog/blog-author-4.jpg";
import blogAuthor5 from "../../assets/blog/blog-author-5.jpg";
import blogAuthor6 from "../../assets/blog/blog-author-6.jpg";

// Comment images
import comment1 from "../../assets/blog/comments-1.jpg";
import comment2 from "../../assets/blog/comments-2.jpg";
import comment3 from "../../assets/blog/comments-3.jpg";
import comment4 from "../../assets/blog/comments-4.jpg";
import comment5 from "../../assets/blog/comments-5.jpg";
import comment6 from "../../assets/blog/comments-6.jpg";

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
    <section className="section" id="blog">
      <div className="container">
        <div className="text-center">
          <h1 className="font-sign">Recent Posts</h1>
          <p className="font-mono">
            Discover the latest insights from industry experts.
          </p>
        </div>

        <div className="container-fluid">
          <div className="row row-gap-3">
            {posts.map((post) => (
              <div
                className="col-12 col-sm-6 col-lg-4 position-relative"
                key={post.id}
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <div className="card position-relative h-100 border-0 shadow">
                  <img
                    src={post.image}
                    alt={post.role}
                    className="card-img-top"
                  />
                  <div className="card-body p-4">
                    <div className="card-text text-muted">{post.role}</div>
                    <div className="card-text fw-bold">{post.desc}</div>
                  </div>

                  {hoveredPost === post.id && (
                    <div className="position-absolute top-0 rounded-2 start-0 w-100 h-100 bg-dark opacity-25 d-flex align-items-center justify-content-center text-white p-3"></div>
                  )}

                  <div className="card-footer border-0 d-flex align-items-center gap-2 px-4 py-2">
                    <img
                      className="rounded-circle"
                      src={post.author.avatar}
                      alt={post.author.name}
                      style={{ width: "40px", height: "40px" }}
                    />
                    <div>
                      <h3 className="fs-6 mb-0">{post.author.name}</h3>
                      <span className="fs-6 text-muted">
                        {post.author.date}
                      </span>
                    </div>
                  </div>
                </div>

                {hoveredPost === post.id && (
                  <div className="position-absolute top-0 start-50 translate-middle-x text-bg-dark d-flex align-items-center gap-3 p-2 rounded-3 shadow show-transition">
                    <img
                      src={post.comment.image}
                      className="rounded-circle"
                      alt="commenter"
                      style={{ width: "30px" }}
                    />
                    <div>
                      <span className="fw-bold" style={{ fontSize: "1rem" }}>
                        {post.comment.name}
                      </span>
                      <p className="mb-0" style={{ fontSize: ".8rem" }}>
                        {post.comment.text}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
