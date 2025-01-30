import React from "react";
import BlogPost from "../components/BlogPost";

const Home = () => {
  return (
    <div>
      <BlogPost title="First Blog Post" content="This is my first blog post!" />
      <BlogPost title="React.JS for Beginners" content="Learn how to use React.JS easily." />
      <BlogPost title="My Resume" content="Shortcut for CV's" />

    </div>
  );
};

export default Home;
