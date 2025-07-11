import React from 'react';
import { technologies, developmentProcess } from '../utils/development-assests';
const Development: React.FC = () => {
  

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our <span className="text-purple-600">Tech Stack</span></h1>
          <p className="text-lg text-gray-600">We specialize in modern technologies that power scalable and efficient applications.</p>
        </div>
      </section>

      {/* Tech Proficiency */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Core Technologies</h2>
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">{tech.icon}</span>
                    <span className="text-gray-800 font-medium">{tech.name}</span>
                  </div>
                  <span className="text-gray-600 text-sm">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`h-2 rounded-full bg-gradient-to-r ${tech.color}`} style={{ width: `${tech.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Development Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="text-center">
                <div className={`${phase.color} text-white w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4`}>
                  {phase.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{phase.phase}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Build Something Great Together</h2>
        <p className="text-lg mb-6">Have an idea? We’ll help you bring it to life with the right technologies.</p>
        <a href="/contact" className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
          Get In Touch
        </a>
      </section>
    </div>
  );
};

export default Development;
