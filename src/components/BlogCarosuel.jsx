import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogCarousel = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in 2025",
      description: "Explore how AI is shaping the future of technology and industries worldwide.",
      image: "/blog1.jpg",
    },
    {
      id: 2,
      title: "Data Science: The Hottest Career",
      description: "Why Data Science remains one of the most in-demand careers of the decade.",
      image: "/blog2.jpg",
    },
    {
      id: 3,
      title: "Machine Learning in Business",
      description: "How businesses are leveraging ML to drive growth and efficiency.",
      image: "/blog3.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-[1200px] mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-[#A60000] text-center mb-10">
        Latest Blog Posts
      </h2>
      <Slider {...settings}>
        {blogPosts.map((post) => (
          <div key={post.id} className="p-4">
            <div
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer"
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              <img src={post.image} alt={post.title} className="w-full h-[250px] object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-[#A60000]">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.description}</p>
                <button className="mt-4 text-[#FFB900] font-semibold">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogCarousel;
