import React from "react";
import SF from '../img/surukupaifoods.png'

const Contact = () => {
    document.title = 'Contact';
    return (
        <div className="grid md:grid-cols-2">
            <div className='p-4 items-center justify-center mb-10'>
                <div className='hidden md:flex flex-col items-center justify-center relative'>
                    <div className='opacity-0 bg-black/50 rounded-lg hover:opacity-100 tranisition delay-75 duration-200 ease-in-out w-full h-full absolute top-0 flex items-center justify-center my-auto gap-2 mx-auto'>
                        <a href='https://maps.app.goo.gl/w7Q5RYFN3tx74Bb3A' target='_blank'><button className='border-0 bg-white p-2 border-white text-black rounded-lg font-semibold'>
                            <img width="43" height="43" src="https://img.icons8.com/ios-filled/100/marker.png" alt="marker" />
                        </button></a>
                        <a href='tel:8056964784'><button className='p-3 border-0 bg-white p-2 text-black rounded-lg font-semibold'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" class="bi bi-telephone-fill" viewBox="0 0 16 16" >
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                        </button></a>
                    </div>
                    <img className='rounded-lg w-full h-full' src={SF} alt='Home' />
                </div>
                <div className='md:hidden flex flex-col items-center justify-center'>
                    <div className='opacity-0 bg-black/50 rounded-lg hover:opacity-100 tranisition delay-75 duration-200 ease-in-out w-full h-full absolute top-[205px] flex items-center justify-center my-auto gap-2 mx-auto'>
                        <a href='https://maps.app.goo.gl/w7Q5RYFN3tx74Bb3A' target='_blank'><button className='border-1 bg-white p-2 border-white text-black rounded-lg font-semibold'>
                            <img width="43" height="43" src="https://img.icons8.com/ios-filled/100/marker.png" alt="marker" />
                        </button></a>
                        <a href='tel:8056964784'><button className='p-3 border-0 bg-white p-2 text-[black] rounded-lg font-semibold'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="black" class="bi bi-telephone-fill" viewBox="0 0 16 16" >
                                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                        </button></a>
                    </div>
                    <img className='rounded-lg w-[700px] h-[600px]' src={SF} alt='Home' />
                </div>
            </div>
            <div className="grid p-4">
                <div className="">

                <p className="font-semibold text-3xl p-5 leading-10">Packed & Marketed by Surukupai Foods<br />Customer Care & Trade Enquiry <br />+91 8056964784</p>
                </div>
                <div className='flex flex-col text-lg font-semibold'>
                    <div className='max-w-full'>
                        <p className='m-2 p-4 md:p-1 text-black text-xl leading-8'>
                            Surukupai Foods,<br />
                            Arriyappampalayam,<br />
                            Sathyamangalam,<br />
                            Erode district,<br />
                            Tamil Nadu 638402
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-xl font-semibold p-5 leading-10">Working Hours <br /> EVERYDAY<br /> 9:00a.m to 6:00p.m</p>
                </div>
            </div>
        </div>
    );
}

export default Contact