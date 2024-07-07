import React from 'react';

const clients = [
  '/assests/clients/clientsicon-1.png',
  '/assests/clients/clientsicon-2.png',
  '/assests/clients/clientsicon-3.png',
  '/assests/clients/clientsicon-4.png',
  '/assests/clients/clientsicon-5.png',
  '/assests/clients/clientsicon-6.png',
  '/assests/clients/clientsicon-7.png',
];

const Clients = () => {
  return (
    <div className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-gray-900 text-center">Our Clients</h2>
    <p className="mt-4 text-center text-lg text-gray-600">
      We have been working with some Fortune 500+ clients
    </p>
    <div className="mt-10 flex justify-between items-center">
      {clients.map((client, index) => (
        <div key={index} className="flex justify-center">
          <img className="h-12" src={client} alt={`Client logo ${index + 1}`} />
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default Clients;
