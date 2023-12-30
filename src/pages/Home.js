import Carousel from "../Components/Carousel"
import img1 from '../img/E (1).png'
import img2 from '../img/E.png'
import { Link } from "react-router-dom"

const Home = () => {
    document.title = 'Surukupai Foods';
    return (
        <div>
            <Carousel />
            <div className="my-4">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-5">
                        <img src={img1} className="rounded-2xl" />
                    </div>
                    <div className="p-5">
                        <p className="text-5xl font-bold">Tumeric in Sachets</p>
                        <div className="m-4 p-4 leading-8 text-[22px] flex items-center justify-center">
                            <ul style={{ listStyleType: 'disc' }} >
                                <li className="mb-3">First launched by Surukupai Foods, a reputable and innovative food company.</li>
                                <li className="mb-3">Each serving is carefully measured to contain only 4g, ensuring that consumers maintain a healthy portion size.</li>
                                <li className="mb-3">The product is available in sachet packets, making it easy for individuals to carry and consume the recommended portion anywhere, anytime.</li>
                                <li className="mb-3">The product can be applied directly to the face, emphasizing its versatility and potential use in skincare or cosmetics.</li>
                                <li className="mb-3">Designed to minimize waste, the product's packaging ensures that users use the right amount without excess, contributing to environmental sustainability.</li>
                                <li>Promotes a healthy lifestyle by encouraging controlled intake and conscious consumption.</li>
                            </ul>
                        </div>
                        <Link to='/store' className="text-2xl font-semibold p-5 flex items-center justify-center bg-black text-white rounded-xl">Try now &gt;</Link>
                    </div>
                </div>
                <br />
                <div className="lg:grid-cols-2 lg:grid hidden">
                    <div className="flex items-center justify-center">
                    <div className="p-5">
                        <p className="text-5xl font-bold">Tumeric Powder</p>
                        <div className="m-4 p-4 leading-8 text-[22px] flex items-center justify-center">
                            <ul style={{ listStyleType: 'disc' }} >
                                <li className="mb-3">Pepper and normal tea specifically designed for cooking purposes are offered.</li>
                                <li className="mb-3">Available in convenient quantities of 100g and 250g.</li>
                                <li className="mb-3">Herbal wild and wild turmeric are formulated for facial use, catering to skincare needs and offered in a practical 100g variant.</li>
                                <li className="mb-3">The availability of different quantity options (100g and 250g) provides flexibility for users based on their preferences and needs.</li>
                                <li className="mb-3">The products serve dual purposes, addressing both culinary and skincare requirements.</li>
                                <li className="">Convenient packaging sizes make it easy for users to choose the right quantity for their intended use.</li>
                            </ul>
                        </div>
                        <Link to='/store' className="text-2xl font-semibold p-5 flex items-center justify-center bg-black text-white rounded-xl">Try now &gt;</Link>
                    </div>
                    </div>
                    <div className="p-5">
                        <img src={img2} className="rounded-2xl" />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:hidden">
                    <div className="p-5">
                        <img src={img2} className="rounded-2xl" />
                    </div>
                    <div className="flex items-center justify-center">
                    <div className="p-5">
                        <p className="text-5xl font-bold">Tumeric Powder</p>
                        <div className="m-4 p-4 leading-8 text-[22px] flex items-center justify-center">
                            <ul style={{ listStyleType: 'disc' }} >
                                <li className="mb-3">Pepper and normal tea specifically designed for cooking purposes are offered.</li>
                                <li className="mb-3">Available in convenient quantities of 100g and 250g.</li>
                                <li className="mb-3">Herbal wild and wild turmeric are formulated for facial use, catering to skincare needs and offered in a practical 100g variant.</li>
                                <li className="mb-3">The availability of different quantity options (100g and 250g) provides flexibility for users based on their preferences and needs.</li>
                                <li className="mb-3">The products serve dual purposes, addressing both culinary and skincare requirements.</li>
                                <li className="">Convenient packaging sizes make it easy for users to choose the right quantity for their intended use.</li>
                            </ul>
                        </div>
                        <Link to='/store' className="text-2xl font-semibold p-5 flex items-center justify-center bg-black text-white rounded-xl">Try now &gt;</Link>
                    </div>                        
                    </div>
                </div>
            </div>
            <div className="bg-black text-white p-[30px] md:h-[400px] lg:h-[300px]">
                <div className="">
                    <p className="text-3xl font-bold text-center p-6">FOR BULK ORDERS AND PERSONALIZED RETURN GIFTS</p>
                    <div className="leading-loose text-center text-xl">
                        <p>We are ready to take the bulk orders and also, we do personalized return gifts for occasions in prior order basis.</p>
                        <p>For orders Contact +91 80569 64784</p>
                        <p>You can also place the order through our Whatsapp or social media handles (i.e., LinkedIn, Instagram)</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home