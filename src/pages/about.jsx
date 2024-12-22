import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 py-10 px-5">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-5">About Us</h1>
        <p className="text-lg text-gray-600 leading-relaxed text-justify max-w-3xl mx-auto mb-6">
          Welcome to our platform! We are committed to delivering exceptional value and services to our community. 
          Our mission is to create meaningful experiences through innovative solutions that meet your needs and exceed expectations.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed text-justify max-w-3xl mx-auto mb-6">
          With a focus on quality, reliability, and customer satisfaction, we strive to build lasting relationships with everyone we serve. 
          Whether you’re here to explore, learn, or collaborate, we are dedicated to supporting you every step of the way.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed text-justify max-w-3xl mx-auto mb-6">
          Thank you for being a part of our journey. Together, we aim to achieve greatness and make a positive impact.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
