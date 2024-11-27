import React from 'react';  

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Blog from '../components/Blog';

const BlogS = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container px-4 pt-12 m-auto md:px-12 ">
      <Navbar />
      <Blog />
      <Footer />
</main>
  );
};
export default BlogS;