"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
// import TabButton from "./TabButton";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    image: '/skills.png',
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>PHP</li>
        <li>Wordpress</li>
        <li>JavaScript</li> 
        <li>React</li>         
        <li>NextJs</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    image: '/skill1.png',
    content: (
      <ul className="list-disc pl-2">
        <li>Bsc.csit in Bhaktapur Multiple Campus</li>
        <li>Computer Science in Khwopa Higher Secondary School</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    image: '/certification.png',
    content: (
      <ul className="list-disc pl-2">
        <li>Intership certificate of Front-end</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
//   const [isPending, startTransition] = useTransition();

//   const handleTabChange = (id) => {
//     startTransition(() => {
//       setTab(id);
//     });
//   };
  const activeclick =(pass) =>{
       setTab(pass);
       console.log(`Active tab set to: ${pass}`);
  }

  return (
    <section className="text-white py-16 " id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 ">
        <figure className="overflow-hidden h-auto self-center w-[100%] justify-center md:w-[80%] order-2 md:order-1">
        <Image className=" object-cover object-center w-[100%]" src=
        {TAB_DATA.find((t) => {
  return t.id === tab; // Return the condition for find
})?.image || "No content available"} width={500} height={500} />
</figure>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full order-1 md:order-2">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          As a passionate and innovative Frontend Developer, I am dedicated to crafting intuitive and visually stunning user interfaces that
enhance user experiences. With a strong foundation in HTML, CSS, and JavaScript, php and Nextjs and hands-on experience with modern
frameworks such as Wordpress, Shopify , I am eager to contribute to a dynamic team where I can leverage my skills to build
responsive and accessible web applications. My goal is to continually grow my expertise in frontend technologies, collaborate
eectively with cross-functional teams, and drive the successful delivery of high-quality digital solutions.          </p>
          <div className="flex flex-row justify-start mt-8">
            <button className={`skills border-b text-[#fff] p-2 ${
    tab === "skills" ? "border-[#fff]" : "border-[#fff0]"
  }`} onClick={()=> activeclick("skills")}>
                Skills 
            </button>
            <button className={`education ml-4 mr-4 border-b text-[#fff] p-2 ${
    tab === "education" ? "border-[#ffffff]" : "border-[#fff0]"
  }`} onClick={()=> activeclick("education")}>
               Education
            </button>
            <button className={`certification border-b text-[#fff] p-2 ${
    tab === "certifications" ? "border-[#ffffff]" : "border-[#fff0]"
  }`} onClick={()=> activeclick("certifications")}>
                Certification
            </button>
           
          </div>
          <div className="mt-8">
          {TAB_DATA.find((t) => {
  console.log(t); // Log each item in TAB_DATA as find iterates over it
  return t.id === tab; // Return the condition for find
})?.content || "No content available"}

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;