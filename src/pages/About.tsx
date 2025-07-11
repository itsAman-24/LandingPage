import React from "react";
import { stats, values } from "../utils/about-assets";

const About: React.FC = () => {
 
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-purple-600">PixelCraft</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're a passionate team of designers and developers creating
            exceptional digital products that drive impact and growth.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 px-4">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Founded in 2019, PixelCraft began as a small team of tech
              enthusiasts who believed great digital experiences transform
              businesses. What started as a creative spark is now a full-service
              digital agency.
            </p>
            <p className="text-gray-600">
              We've helped 150+ businesses strengthen their digital presence,
              streamline operations, and grow fast. Every project we take is an
              opportunity to make a real impact.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="PixelCraft Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Our Impact in Numbers
            </h2>
            <p className="text-gray-600 text-lg">
              A quick look at what we’ve accomplished together with our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-2xl p-8 shadow"
              >
                <div className="text-purple-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              What Drives Us
            </h2>
            <p className="text-gray-600 text-lg">
              Our values shape how we work and what we deliver.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center px-6">
                <div className="text-purple-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
