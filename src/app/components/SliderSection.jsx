"use client"
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/pagination';
import TestimonialBox from './TestimonialBox';
const Testimonials = [
    {
        names: "team_member1",
        image: '/team_menber1.jpg',
        positions: 'Frontend Developers',
        description: "Front-end development brings ideas to life! It’s amazing how code transforms into stunning, interactive designs.",
    },
    {
        names: "team_member1",
        image: '/team_member.jpg',
        positions: 'Frontend Developers',
        description: "The power of a well-designed UI cannot be overstated—front-end is where user experience begins",
    },
    {
        names: "team_member1",
        image: '/team_member4.png',
        positions: 'Frontend Developers',
        description: "Mastering front-end feels like painting with code—each element adds to the user’s story.",
    },
    {
        names: "team_member1",
        image: '/team_member3.jpg',
        positions: 'Frontend Developers',
        description: "A seamless front-end is the heart of a website; it’s how users truly connect with your brand.",
    },
    {
        names: "team_member1",
        image: '/team_member2.png',
        positions: 'Frontend Developers',
        description: "Front-end development combines creativity with logic—it's the perfect balance of art and engineering.",
    },
];
const SliderSection = () =>{
    return(
        <section className='py-16'>
             <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#fff] dark:text-gray-200">Testimonials</h2>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Check out our most popular Testimonials</p>
            </div>
            <Swiper
    spaceBetween={20}
    slidesPerView={3} // Default for larger screens
    navigation={true}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    className="w-[80%]"
    loop={true}
    modules={[Pagination, Navigation]}
    style={{
        '--swiper-navigation-size': '20px', // Set the navigation button size to 20px
        '--swiper-navigation-color': '#000', // Set the navigation button color to black
        '--swiper-pagination-color': '#000', // Set pagination color to black
        '--swiper-pagination-button-color': '#000', // Set the color of the pagination buttons to black
        '--swiper-pagination-button-size': '20px', 
    }}
    breakpoints={{
        320: { // for small screens (mobile)
            slidesPerView: 1, // 1 slide per view on mobile
        },
        768: { // for tablets and larger screens
            slidesPerView: 2, // Optionally adjust for tablets
        },
        1024: { // for large screens
            slidesPerView: 3, // 3 slides per view on desktop and larger screens
        },
    }}
>
                {Testimonials.map((item, index) => (
                <SwiperSlide key={index} className='h-[unset]'>
                    <div className="h-full rounded-lg overflow-hidden">
                    <TestimonialBox src={item.image } name={item.names} position={item.positions}  desc={item.description}/>
                    </div>         
                </SwiperSlide>
))}
        </Swiper>
        </section>
    )
}
export default SliderSection;