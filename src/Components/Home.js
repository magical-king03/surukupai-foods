import Carousel from "./Carousel"
import img1 from '../img/E (1).png'
import img2 from '../img/E.png'

const Home = () => {
    return (
        <div>
            <Carousel />
            <div className="my-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
                    <div>
                        <img src={img1} className="rounded-lg" />
                    </div>
                    <div className="flex items-center justify-center">
                        <p>Content need to be added</p>
                    </div>
                </div>
                <br />
                <div className="md:grid-cols-2 md:grid hidden">
                    <div className="flex items-center justify-center">
                        <p>Content need to be added</p>
                    </div>
                    <div>
                        <img src={img2} className="rounded-lg" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:hidden">
                    <div>
                        <img src={img2} className="rounded-lg" />
                    </div>
                    <div className="flex items-center justify-center">
                        <p>Content need to be added</p>
                    </div>
                </div>
            </div>
            <div className="bg-black text-white p-[30px] md:h-[400px] lg:h-[300px]">
                <div className="">
                    <p className="text-3xl font-bold text-center p-6">FOR BULK ORDERS AND PERSONALIZED RETURN GIFTS</p>
                    <div className="leading-loose text-center text-xl">
                        <p>We are ready to take the bulk orders and also, we do personalized return gifts for occasions in prior order basis.</p>
                        <p>For orders Contact +91 80569 64784</p>
                        <p>You can also place the order through our Whatsapp or social media handles (i.e., LinkedIn, Instagram, Facebook)</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home