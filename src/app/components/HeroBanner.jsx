"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';


const HeroBanner = () => {
    return(
        <section className="py-16 h-[100vh] flex align-middle">
            <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center">
            <div>
            <h1 className="text-white mb-4 text-4xl lg-text bold">Hello! I am <br/>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Sanish',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Front-end Developer',
        1000,
        'from Bhaktapur',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
            </h1>
            <p className="text-[#ADB7BE] text-base lg:text-2xl">As a dedicated Frontend Developer with over 1 year of experience specializing in WordPress and Shopify, I am committed to creating
            engaging, user-friendly websites that drive business success. Procient in HTML, CSS, JavaScript, php, Liquid ,Nextjs etc</p>
            <Link href ="/cv/sanish-resume.pdf" className="text-center block w-full md:w-max border border-white rounded-full bg-white text-[#000000] px-3 py-3 hover:bg-[#000000] hover:text-white mt-8 mb-8" download>Download CV</Link>
            </div>

            <div className="place-self-center mt-4 lg:mt-0">
            <figure className="rounded-full bg-[#181818] w-[250px] h-[250px] overflow-hidden flex justify-center align-middle  lg:w-[300px] lg:h-[300px]">
                <Image
                src="/images/sanish-koju.jpg"
                alt="Hero-image"
                className="object-cover w-[100%] h-[100%]"
                width="300"
                height="300"
                />
            </figure>
            </div>
            </div>
        </section>
    )
}
export default HeroBanner;