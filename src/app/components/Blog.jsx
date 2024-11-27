
import Image from "next/image";
import React from 'react';
import Link from 'next/link';
import fs from "fs";
import matter from 'gray-matter';



const dirContent = fs.readdirSync("content", "utf-8")


const blogs = dirContent.map(file=>{
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
    const {data} = matter(fileContent)
    return data

})
const Blog = () => {
    return(
<section className="py-12 dark:bg-gray-900">
  <div className="container px-4 mx-auto">
 
    <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-[#fff] dark:text-gray-200">Top Blogs</h2>
  </div>


          {/* Grid layout for blog posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {blogs.map((blog, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden  dark:border-2 bg-white relative">
            {/* Blog post image */}
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            
            {/* Blog post content */}
            <div className="p-4 pb-16">
              {/* Blog post title */}
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              
              {/* Blog post description */}
              <p className=" mb-4 text-sm">{blog.description}</p>
              
              {/* Blog post author and date */}
              <div className="text-sm  mb-4 text-[#545454]">
                <span className='italic'>By {blog.author}</span> | <span className='italic'>{new Date(blog.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
              </div>
              
              {/* Link to the full blog post */}
              <Link href={`/blogpost/${blog.slug}`} className="bg-zinc-400 px-2 py-3 rounded-lg text-white inline-block absolute left-5 bottom-5">Click here</Link>
            </div>
          </div>
        ))}
      </div>
  </div>
</section>

  
  );
};

export default Blog;

















