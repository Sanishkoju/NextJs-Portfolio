import React from 'react';  

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Blog from '../components/Blog';

const BlogS = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  px-4 pt-12 m-auto md:px-12 ">
      <div className='container'>
      <Navbar />
      <Blog />
      <Footer />
      </div>
</main>

  );
};
export default BlogS;