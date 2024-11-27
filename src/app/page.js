import Image from "next/image";
import HeroBanner from "./components/HeroBanner.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutSection from "./components/AboutSection.jsx";
import Project from "./components/Project.jsx";
import EmailSection from "./components/EmailSection.jsx";
import SwiperSection from "./components/SliderSection.jsx"
import Footer from "./components/Footer.jsx";
import Blog from "./components/Blog.jsx";



export default function Home() {
  return (
    <div className="">
      <main className="flex min-h-screen flex-col bg-[#121212] px-4 pt-12 m-auto md:px-12">
     < div className='container m-auto'>
        <Navbar />
        <HeroBanner />
        <AboutSection />
        <Project />
        <SwiperSection />
        <Blog />
        <EmailSection />
      
        <Footer />
  </div>
      </main>
    </div>
  );
}
