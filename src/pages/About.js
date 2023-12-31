import React from "react";
import Founder from '../img/Meet Our Founder.png';
import Founder1 from '../img/Meet Our Founder (1).png';
import P1 from '../img/Product (1).png';
const About = () => {
    document.title = 'About';
    return (
        <div>
            <h1 className="text-5xl p-6 font-semibold text-center ">About Us</h1>
            <div className='mt-[30px] grid-cols-1 flex flex-col justify-center gap-5 md:flex-row md:items-center'>
                <img src={P1} alt='Founder' className='rounded-lg shadow-lg shadow-black mb-[20px] md:w-[100px] md:h-[100px]' />
                <p className='mb-[20px] p-4 md:text-xl font-semibold'>My grandmother carries a small bag (Surukupai) with her all day. She has this magic ingredient in it that comes to the rescue in all my health & wellness issues. Today we are making that magic ingredient accessible to everyone.
                </p>
            </div>
            <div className="relative px-[10px] py-[20px] md:py-[50px] lg:p-[100px] ">
                <div className="relative">
                    <img src={Founder} alt="Banner1" className="rounded-lg" />
                    <div className="absolute bottom-0 right-0">
                        <a href="https://ruralindiaonline.org/en/articles/learning-the-tricks-of-the-turmeric-trade-in-tn/" className="font-semibold md:text-lg text-xs hover:underline transition-transform duration-100 delay-100" target="_blank"><img src={Founder1} alt="Read more" className="lg:w-[200px] md:w-[150px] w-[90px]"/></a>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="md:text-5xl text-xl p-6 font-bold">Why Surukupai Pepper Turmeric powder?</h1>
                <div className="p-4 leading-8 md:text-[22px] md:ml-[100px] ml-[30px] mb-[50px]">
                    <ul style={{ listStyleType: 'disc' }} >
                        <li className="mb-3">Directly from farm to home</li>
                        <li className="mb-3">100% Quality Turmeric</li>
                        <li className="mb-3">Best known for Aroma & texture</li>
                        <li className="mb-3">Traditional method of Harvesting  </li>
                        <li className="mb-3">Powdered using stone grinding machine</li>
                        <li className="mb-3">High on curcumin value</li>
                        <li className="mb-3">This is a Vegetarian product.</li>
                        <li className="">Not Returnable.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About