import React from "react";
import { Calendar } from "lucide-react";
import { data } from "../utils/blog-assests";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

const blogPosts: BlogPost[] = data;

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-purple-600">Blog</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dive into expert articles, how-tos, and thought leadership from our creative team.
          </p>
        </div>
      </section>

      {/* All Blog */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full text-xs mr-2">
                      {post.category}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
