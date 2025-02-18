import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();

  // Fetch blog details (Replace this with API call if needed)
  const blogPosts = {
    1: {
      title: "The Future of AI in 2025",
      content: "AI is growing at an exponential rate...",
    },
    2: {
      title: "Data Science: The Hottest Career",
      content: "Data Science continues to be in high demand...",
    },
    3: {
      title: "Machine Learning in Business",
      content: "Businesses are rapidly adopting ML...",
    },
  };

  const blog = blogPosts[id];

  return (
    <div className="max-w-[800px] mx-auto py-12 px-4">
      {blog ? (
        <>
          <h1 className="text-4xl font-bold text-[#A60000]">{blog.title}</h1>
          <p className="mt-6 text-lg text-gray-700">{blog.content}</p>
        </>
      ) : (
        <p className="text-center text-2xl text-gray-600">Blog not found</p>
      )}
    </div>
  );
};

export default BlogDetail;
