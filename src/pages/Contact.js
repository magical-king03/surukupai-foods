import React from "react";
import SF from '../img/surukupaifoods.png'

const Contact = () => {
    document.title = 'Contact';
    return (
        <div>
            <div className="bg-black p-10 m-">
                <h1 className="text-5xl p-6 font-semibold text-center text-white">Contact Us</h1>
            </div>
            <div className="grid md:grid-cols-2 p-[50px] md:pl-[150px]">
                <div>
                    <h1 className="text-3xl p-6 font-semibold">Contact Us</h1>
                </div>
                <div className="p-4">
                    <div className="flex items-center gap-5">
                        <div className="border border-3 border-black p-4 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                        </div>
                        <a href="tel:+91 8056964784">+91 8056964784</a>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex items-center gap-5">
                        <div className="border border-3 border-black p-4 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <a href="mailto:surukupaifoods@gmail.com">surukupaifoods@gmail.com</a>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex items-start gap-5">
                        <div className="border border-3 border-black p-4 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                            </svg>
                        </div>
                        <div>
                            <p className='leading-8'>
                                SURUKUPAI FOODS,<br />
                                Arriyappampalayam,<br />
                                Sathyamangalam,<br />
                                Erode district,<br />
                                Tamil Nadu - 638 402
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
}

export default Contact