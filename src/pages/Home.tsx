import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 px-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Let’s Collaborate
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          We help businesses grow with modern digital solutions.
          Reach out and tell us what you need.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Home;
