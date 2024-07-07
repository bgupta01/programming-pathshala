'use client'
import Head from 'next/head';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Navbar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Head>
        <title>Nexcent</title>
        <meta name="description" content="Nexcent landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-gray-100 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-green-600">Nexcent</div>
          <nav className="space-x-6">
            <a href="#" className="text-gray-800 hover:text-green-600">Home</a>
            <a href="#" className="text-gray-800 hover:text-green-600">Service</a>
            <a href="#" className="text-gray-800 hover:text-green-600">Feature</a>
            <a href="#" className="text-gray-800 hover:text-green-600">Product</a>
            <a href="#" className="text-gray-800 hover:text-green-600">Testimonial</a>
            <a href="#" className="text-gray-800 hover:text-green-600">FAQ</a>
          </nav>
          <div className="space-x-4">
            <button className="text-green-600">Login</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded">Sign up</button>
          </div>
        </div>
      </header>
      <main className="bg-gray-50 py-20">
        <div className="container mx-auto">
          <Carousel>
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-bold text-gray-800 text-center mb-4">Lessons and insights from 8 years</h1>
              <p className="text-xl text-gray-600 text-center mb-8">Where to grow your business as a photographer: site or social media?</p>
              <button className="bg-green-600 text-white px-8 py-4 rounded text-lg">Register</button>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-bold text-gray-800 text-center mb-4">Grow your skills</h1>
              <p className="text-xl text-gray-600 text-center mb-8">Learn from the experts and take your photography to the next level.</p>
              <button className="bg-green-600 text-white px-8 py-4 rounded text-lg">Get Started</button>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-bold text-gray-800 text-center mb-4">Join our community</h1>
              <p className="text-xl text-gray-600 text-center mb-8">Connect with other photographers and share your journey.</p>
              <button className="bg-green-600 text-white px-8 py-4 rounded text-lg">Join Now</button>
            </div>
            {/* <div> 
                      <img src="/1.png" alt="image1"/> 
                      <p className="legend">Image 1</p> 
  
                  </div> 
                  <div> 
                      <img src="/2.png" alt="image2" /> 
                      <p className="legend">Image 2</p> 
  
                  </div> 
                  <div> 
                      <img src="/3.png" alt="image3"/> 
                      <p className="legend">Image 3</p> 
  
                  </div>  */}
          </Carousel>
          {/* <Slider {...settings}>
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-bold text-gray-800 text-center mb-4">Lessons and insights from 8 years</h1>
              <p className="text-xl text-gray-600 text-center mb-8">Where to grow your business as a photographer: site or social media?</p>
              <button className="bg-green-600 text-white px-8 py-4 rounded text-lg">Register</button>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-bold text-gray-800 text-center mb-4">Grow your skills</h1>
              <p className="text-xl text-gray-600 text-center mb-8">Learn from the experts and take your photography to the next level.</p>
              <button className="bg-green-600 text-white px-8 py-4 rounded text-lg">Get Started</button>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-bold text-gray-800 text-center mb-4">Join our community</h1>
              <p className="text-xl text-gray-600 text-center mb-8">Connect with other photographers and share your journey.</p>
              <button className="bg-green-600 text-white px-8 py-4 rounded text-lg">Join Now</button>
            </div>
          </Slider> */}
        </div>
      </main>
    </div>
  );
};

export default Navbar;
