import React from 'react';

const HeroService = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">

                    <div className="flex justify-center lg:justify-end">
                        <img src="/assests/heroService/heroService-1.png" alt="Description" className="w-3/4 lg:w-full" />
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            The unseen of spending three years at Pixelgrade
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                        </p>
                        <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroService;



