// components/Services.js
import React from 'react';

const services = [
  {
    title: 'Membership Organisations',
    description: 'Our membership management software provides full automation of membership renewals and payments',
    icon: '/assests/services/Service-logo-1.png', 
  },
  {
    title: 'National Associations',
    description: 'Our membership management software provides full automation of membership renewals and payments',
    icon: '/assests/services/Service-logo-2.png',
  },
  {
    title: 'Clubs And Groups',
    description: 'Our membership management software provides full automation of membership renewals and payments',
    icon: '/assests/services/Service-logo-3.png',
  },
];

const Services = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Who is Nexcent suitable for?</h2>
        <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Manage your entire community in a single system
        </h1>
      </div>
      <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="relative bg-white py-10 px-6 shadow-lg rounded-lg text-center">
            <img src={service.icon} alt={service.title} className="mx-auto h-16 w-16 mb-4" />
            <h3 className="text-lg leading-6 font-medium text-gray-900">{service.title}</h3>
            <p className="mt-4 text-base text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
