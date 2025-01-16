import Link from "next/link";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = [
    {
        names: "WordPress Blog",
        image: '/images/projects/project1.jpg',
        titles: 'WordPress Blog',
        description: 'This WordPress blog showcases a responsive layout with dynamic post handling, designed to deliver an engaging user experience through customizable themes and plugins.',
    },
    {
        names: "Shopify E-Scooter",
        image: '/images/projects/project2.jpg',
        titles: 'Shopify E-Scooter',
        description: 'This Shopify E-Scooter store is built for seamless e-commerce, featuring responsive product pages, integrated payment options, and a user-friendly interface.',
    },
    {
        names: "WordPress WooCommerce",
        image: '/images/projects/project3.jpg',
        titles: 'WordPress WooCommerce',
        description: 'this WordPress WooCommerce site combines e-commerce functionality with a sleek design, offering a responsive layout and advanced product management.',
    },
    {
        names: "NextJs Portfolio",
        image: '/images/projects/project4.jpg',
        titles: 'NextJs Portfolio',
        description: 'This Next.js portfolio highlights cutting-edge web technologies, offering server-side rendering, responsive design, and a dynamic showcase of skills and projects.',
    },
    {
        names: "React E-commerce",
        image: '/images/projects/project5.jpg',
        titles: 'React App',
        description: 'This React is built using HTML, CSS, and JavaScript, React featuring a clean design, responsive layout, and interactive elements to effectively showcase projects and skills using dummy data for e-commerce',
    },
];

const Project = () => {    
    return (
        <section className=" py-16" id="project">
            <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#fff] dark:text-gray-200">Top Projects</h2>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular Projects</p>
            </div>
            <div className="flex flex-wrap gap-5 justify-center">

            {Projects.map((item, index) => (
                <div key={index} className="w-[100%] lg:w-[32%] h-64 relative rounded-lg overflow-hidden">
                    <ProjectCard src={item.image } name={item.names} title={item.titles} desc={item.description} />         
                </div>

))}
</div>
        </section>
    );
};

export default Project;
