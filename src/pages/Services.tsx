import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '../utils/service-assests';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {


  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-purple-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We offer comprehensive digital solutions to help your business thrive in the modern digital landscape.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl border-2 border-gray-300 hover:border-purple-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-purple-600 mb-6">
                    {service.icon}
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <span className="text-purple-600 font-semibold text-lg">
                      From {service.startingPrice}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to="/contact"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold group"
                  >
                    Get Started
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-600">
                A proven methodology that ensures successful project delivery every time.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'We understand your business goals and requirements' },
                { step: '02', title: 'Strategy', description: 'We develop a comprehensive plan and timeline' },
                { step: '03', title: 'Development', description: 'We build your solution with regular updates' },
                { step: '04', title: 'Launch', description: 'We deploy and provide ongoing support' }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;