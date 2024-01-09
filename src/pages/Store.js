import React, { useState } from "react";
import B1 from '../img/Banner (1).png';
import B2 from '../img/Banner (2).png';
import B3 from '../img/Banner (3).png';
import P1 from '../img/Products/Product (3).png';
import P2 from '../img/Products/Product (4).png';
import P3 from '../img/Products/Product (5).png';
import P4 from '../img/Products/Product (6).png';
import P5 from '../img/Products/Product (7).png';
import P6 from '../img/Products/Product (8).png';
import P7 from '../img/Products/Product (9).png';
import P8 from '../img/Products/Product (10).png';
import P9 from '../img/Products/Product (11).png';
import P10 from '../img/Products/Product (12).png';
import P11 from '../img/Products/Product (13).png';
import P12 from '../img/Products/Product (14).png';
import P13 from '../img/Products/Product (15).png';
import P14 from '../img/Products/Product (16).png';
import P15 from '../img/Products/Product (17).png';
import P16 from '../img/Products/Product (18).png';
import P17 from '../img/Products/Product (19).png';
import P18 from '../img/Products/Product (20).png';
import Carousel from "../Components/Carousel";

function Store() {
    document.title = 'Store';
    const [banner1, setBanner1] = useState(true);
    const [banner2, setBanner2] = useState(true);
    const [banner3, setBanner3] = useState(true);
    const imagesEdible1 = [P1, P2];
    const imagesEdible2 = [P3, P4];
    const imagesEdible3 = [P5, P6];
    const imagesEdible4 = [P7, P8];
    const imageFace1 = [P9, P10];
    const imageFace2 = [P11, P12];
    const changeB1 = () => {
        setBanner1(!banner1)
    }
    const changeB2 = () => {
        setBanner2(!banner2)
    }
    const changeB3 = () => {
        setBanner3(!banner3)
    }
    return (
        <div>
            <h1 className="text-5xl p-6 font-semibold text-center">Our Products</h1>
            <div className="">
                <div className="relative px-[10px] py-[20px] md:py-[50px] lg:p-[100px]">
                    <div className="relative">
                        <img src={B2} alt="Banner 1" className="rounded-lg" />
                        {
                            banner2 ?

                                <div className="absolute bottom-0 right-0 mr-[20px] mb-[10px]">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZklEQVR4nO2aTUtVURSGn6JPyz7oO2/QH0izaTpo3MTsN0QlNG6UNmyepok/QNFZBIUlRd+YoWQZiQUh6sBEiQZidmLDEi6Xe889e699rvvGeeGdXM5ea73r7rP32utsyJAhQ4YMGTIokAOagEtAG9ABdAJDwAjwXjgNzABzwBKwAkTCFfltTp6Zzhs3IrY6xXab+GoS35uCs0APsJAnYrNoYugGGiohfB/QB6wHILyQJqZeoDYt8aeAjwEILceJNF6NWjEcVQk/Aft9JqAvAFG2NK+DtwVvPQBBtjQx1/tIQE8AYlzZ5SMBCwEIceW8VnwuABFa1mkS0ByAAC1NxeiMywEI0LJVk4C2AARoeU2TgNsBCNCyXZOAewEI0PKuJgFDAQjQckCTgGcBCNDS9BOc8dbS2RtgNUUxq+LDNiZnTFg4egrsBM6nVD0uAheA7cAji3EfNAn4ktDJaEEjIiftLF/izR9xOs9+DfDa4mjsjG8JHPwFGouM3QMMehA/KLYK0Si+y403PUZnzCUMcrpEzb0FuOl4nDbi7gBbi9g9BnxOaGdWk4Ali4C/AidL2LlY0AUux18xJexRmdY2a4czflv+a2bNOFHC1pmEr9QP4FyM+EnLmEwynfHHYepOAcdL2DsEPIkZ+0JEFsMRx6bsWqUTEMmqfbiEzW3ybheOuS9bXDEcBMYcY1mr5CsQ5XFc/vFSuCKFjQnwRsxzB2SbdY1D9Qr8VDiOpBYwAuIaLs1lxGvricVKbINRDMdkCrt8hbItxb1vg989BLBRjxtBSWEKn+eefM9UohSOEvBVwu92NZ5PoapSeNxjIIYvgb1lxI949qk6DL3zHMzGXl+stt8tJ0rf/syhKbiGyLAIzhc/HGJDZDCloAwfA7uAHcCDFP30axLQlWJghg+FwTZFO1IOrhK8pUnA9QAEaHlVk4DWAARoaW6UOaMpAAFamiatM3IBCNjUz+PVfkHCHObU6A5AiCvN7VI1Gqr4kpTpQ3pBbwCCbGlmrjfUpnAyTJOTlv2HxDtCNdwWHfex8sfNhN5A14R1mfZx/QZvqJfbI/OBbHVdPhc8W9RJxdgiF5La5QQ2IGf8UensTkl/blY+uS3niViW32blmSkZMyo2BsRmu/hoEZ+pTfUMGTJkyJCB/x//AOLbSKZkyn6XAAAAAElFTkSuQmCC" alt="Drop-down" className="cursor-pointer h-[25px] w-[25px] md:w-[50px] md:h-[50px]" onClick={changeB2} />
                                </div>
                                :
                                <div className="absolute bottom-0 right-0 mr-[20px] mb-[10px]">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADVklEQVR4nO2aTUuUURTHf0WvlqX0nhP0BdJsmy1atzH7DFEJrVulLVuXpokfINFdBJUlvZoxFkqakmgQYi5KlGghZhMXjiCDzzjPPfc+cyeeP/w3w3PPOf8z9/XcCylSpEiRIkUKBTJAA3ARaAZagTagDxgAhoVTwDQwBywAS0BOuCS/zck3U+vaDYitNrHdLL4axHdJcBroBObXiSgVTQwdQF0SwvcB3cBqAMLzaWLqAip9iT8BfApA6GYc9TE0KsVwrkw4Dux3mYDuAETFpRkOzia81QAExaWJudZFAjoDEGPLdhcJmA9AiC2/a8VnAhChZY0mAecCEKCl2TFa41IAArRs0iSgOQABWl7VJOBWAAK0bNEkoN1zcI+EPn2YU6Q1+jwG9gTYBewAHnr006NJwAtPQT0V8WvYDfR78mXqCdZ47yGgV8CeDXyZJDz34G9Qk4BRx8G8AfYW8Fch/5hLnx81CZh0GMjbIosVFY6HnjkaW+Orw24Yp1JjhshLR75NjdEacw4C+ABUW5bfhhz4n9Uk4KfSeRao2uSsYRiFKqkMa2L4oUnAb4XjEeBAAduXgWVgBbi+SRKyijh+aRLwx9KpWT0ORtjcBtzeoM19YHtEm2oZSjaxrCSdgAngaIQ90yOeFWj7Gjgc0faQZVV6JckhMAkci7B1CpgpwsY34EyEDZOcsSSHwEIMR1+A4xF2LuRdhRUTdFOBJIwnNQnOFelkKqL0tAW4YVlV/itzxdYN7B4BPiexDM4UGWh9xGam10J4Pnsjzg714tvrRmiyyCCzeTu9jIP1O39VOZm3XR5MYis8EiNIc4jZCZz1VEo3Y/m81A8eJ3UYGooZ5DvZ3OQ8cVl8xI0puIJILkGqCiK9AQjQ8kHIRdFcAryjSUBrAAK0vKlJwLUABGh5RZOApgAEaGlelFmjIQABWpp9iTUyAQgo6fV4uT+QMIc5NToCEFKSe8E11JXxIylThHGCrgAExaXpuc5QGfNkWGqOyb2CU2TK5LXoiIuZv1BP6Ap0TliVbl/o8tUZaoF78g4vhKWu3eWEFxc1smNslAdJ5k3OXXmZ0S/lsmG5L5iWIqWpNi+uE7Eov83KNxPSJis2esRmi/hoFJ/eunqKFClSpEjB/49/l3pIoX36BroAAAAASUVORK5CYII=" alt="Drop-down" className="cursor-pointer w-[25px] h-[25px] md:w-[50px] md:h-[50px]" onClick={changeB2} />
                                </div>
                        }
                    </div>
                </div>
                {
                    !banner2 ?
                        <div className="transition-transform delay-500 duration-1000">
                            <div className="flex flex-cols items-center flex-wrap justify-center gap-[30px]">
                                <div className="grid grid-cols-2 md:gap-10">
                                    {/* <a href='#' target="_blank"> */}
                                        <div className="lg:w-[500px] md:[400px] p-3">
                                            {/* <img src={P3} alt='Tumeric powder 1' className="rounded-lg" /> */}
                                            <Carousel images={imagesEdible1} />
                                            <div className="p-5">
                                                <h2 className="md:text-3xl font-bold mb-3">Tumeric powder(100g)</h2>
                                                <p className="md:text-2xl font-semibold mb-3">Price: ₹100</p>
                                            </div>
                                        <a href="/" className="border-none px-5 py-3 text-xl font-semibold bg-black text-white rounded-xl mx-5">Order Now</a>
                                        </div>
                                    {/* </a> */}
                                    {/* <a href='#' target="_blank"> */}
                                        <div className=" lg:w-[500px] md:[400px] p-3">
                                            {/* <img src={P4} alt="Tumeric powder 2" className="rounded-lg" /> */}
                                            <Carousel images={imagesEdible2} />
                                            <div className="p-5">
                                                <h2 className="md:text-3xl font-bold mb-3">Tumeric powder(250g)</h2>
                                                <p className="md:text-2xl font-semibold mb-3">Price: ₹250</p>
                                            </div>
                                            <a href="/" className="border-none px-5 py-3 text-xl font-semibold bg-black text-white rounded-xl mx-5">Order Now</a>
                                        </div>
                                    {/* </a> */}
                                </div>
                                <div className="grid grid-cols-2 md:gap-10">
                                    {/* <a href='#' target="_blank"> */}
                                        <div className=" lg:w-[500px] md:[400px] p-3">
                                            {/* <img src={P3} alt="Tumeric powder 3" className="rounded-lg" /> */}
                                            <Carousel images={imagesEdible3} />
                                            <div className="p-5">
                                                <h2 className="md:text-3xl font-bold mb-3">Pepper Tumeric powder</h2>
                                                <p className="md:text-2xl font-semibold mb-3">Price: ₹150</p>
                                            </div>
                                            <a href="/" className="border-none px-5 py-3 text-xl font-semibold bg-black text-white rounded-xl mx-5">Order Now</a>
                                        </div>
                                    {/* </a> */}
                                    {/* <a href='#' target="_blank"> */}
                                        <div className=" lg:w-[500px] md:[400px] p-3">
                                            {/* <img src={P4} alt="Tumeric powder 4" className="rounded-lg" /> */}
                                            <Carousel images={imagesEdible4} />
                                            <div className="p-5">
                                                <h2 className="md:text-3xl font-bold mb-3">Pepper Tumeric powder</h2>
                                                <p className="md:text-2xl font-semibold mb-3">Price: ₹300</p>
                                            </div>
                                            <a href="/" className="border-none px-5 py-3 text-xl font-semibold bg-black text-white rounded-xl mx-5">Order Now</a>
                                        </div>
                                    {/* </a> */}
                                </div>

                            </div>
                        </div> :
                        <div></div>
                }
            </div>

            <div className="">
                <div className="relative px-[10px] py-[20px] md:py-[50px] lg:p-[100px]">
                    <div className="relative">
                        <img src={B1} alt="Banner 2" className="rounded-lg" />
                        {
                            banner1 ?

                                <div className="absolute bottom-0 right-0 mr-[20px] mb-[10px]">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZklEQVR4nO2aTUtVURSGn6JPyz7oO2/QH0izaTpo3MTsN0QlNG6UNmyepok/QNFZBIUlRd+YoWQZiQUh6sBEiQZidmLDEi6Xe889e699rvvGeeGdXM5ea73r7rP32utsyJAhQ4YMGTIokAOagEtAG9ABdAJDwAjwXjgNzABzwBKwAkTCFfltTp6Zzhs3IrY6xXab+GoS35uCs0APsJAnYrNoYugGGiohfB/QB6wHILyQJqZeoDYt8aeAjwEILceJNF6NWjEcVQk/Aft9JqAvAFG2NK+DtwVvPQBBtjQx1/tIQE8AYlzZ5SMBCwEIceW8VnwuABFa1mkS0ByAAC1NxeiMywEI0LJVk4C2AARoeU2TgNsBCNCyXZOAewEI0PKuJgFDAQjQckCTgGcBCNDS9BOc8dbS2RtgNUUxq+LDNiZnTFg4egrsBM6nVD0uAheA7cAji3EfNAn4ktDJaEEjIiftLF/izR9xOs9+DfDa4mjsjG8JHPwFGouM3QMMehA/KLYK0Si+y403PUZnzCUMcrpEzb0FuOl4nDbi7gBbi9g9BnxOaGdWk4Ali4C/AidL2LlY0AUux18xJexRmdY2a4czflv+a2bNOFHC1pmEr9QP4FyM+EnLmEwynfHHYepOAcdL2DsEPIkZ+0JEFsMRx6bsWqUTEMmqfbiEzW3ybheOuS9bXDEcBMYcY1mr5CsQ5XFc/vFSuCKFjQnwRsxzB2SbdY1D9Qr8VDiOpBYwAuIaLs1lxGvricVKbINRDMdkCrt8hbItxb1vg989BLBRjxtBSWEKn+eefM9UohSOEvBVwu92NZ5PoapSeNxjIIYvgb1lxI949qk6DL3zHMzGXl+stt8tJ0rf/syhKbiGyLAIzhc/HGJDZDCloAwfA7uAHcCDFP30axLQlWJghg+FwTZFO1IOrhK8pUnA9QAEaHlVk4DWAARoaW6UOaMpAAFamiatM3IBCNjUz+PVfkHCHObU6A5AiCvN7VI1Gqr4kpTpQ3pBbwCCbGlmrjfUpnAyTJOTlv2HxDtCNdwWHfex8sfNhN5A14R1mfZx/QZvqJfbI/OBbHVdPhc8W9RJxdgiF5La5QQ2IGf8UensTkl/blY+uS3niViW32blmSkZMyo2BsRmu/hoEZ+pTfUMGTJkyJCB/x//AOLbSKZkyn6XAAAAAElFTkSuQmCC" alt="Drop-down" className="cursor-pointer w-[25px] h-[25px] md:w-[50px] md:md:h-[50px]" onClick={changeB1} />
                                </div>
                                :
                                <div className="absolute bottom-0 right-0 mr-[20px] mb-[10px]">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADVklEQVR4nO2aTUuUURTHf0WvlqX0nhP0BdJsmy1atzH7DFEJrVulLVuXpokfINFdBJUlvZoxFkqakmgQYi5KlGghZhMXjiCDzzjPPfc+cyeeP/w3w3PPOf8z9/XcCylSpEiRIkUKBTJAA3ARaAZagTagDxgAhoVTwDQwBywAS0BOuCS/zck3U+vaDYitNrHdLL4axHdJcBroBObXiSgVTQwdQF0SwvcB3cBqAMLzaWLqAip9iT8BfApA6GYc9TE0KsVwrkw4Dux3mYDuAETFpRkOzia81QAExaWJudZFAjoDEGPLdhcJmA9AiC2/a8VnAhChZY0mAecCEKCl2TFa41IAArRs0iSgOQABWl7VJOBWAAK0bNEkoN1zcI+EPn2YU6Q1+jwG9gTYBewAHnr006NJwAtPQT0V8WvYDfR78mXqCdZ47yGgV8CeDXyZJDz34G9Qk4BRx8G8AfYW8Fch/5hLnx81CZh0GMjbIosVFY6HnjkaW+Orw24Yp1JjhshLR75NjdEacw4C+ABUW5bfhhz4n9Uk4KfSeRao2uSsYRiFKqkMa2L4oUnAb4XjEeBAAduXgWVgBbi+SRKyijh+aRLwx9KpWT0ORtjcBtzeoM19YHtEm2oZSjaxrCSdgAngaIQ90yOeFWj7Gjgc0faQZVV6JckhMAkci7B1CpgpwsY34EyEDZOcsSSHwEIMR1+A4xF2LuRdhRUTdFOBJIwnNQnOFelkKqL0tAW4YVlV/itzxdYN7B4BPiexDM4UGWh9xGam10J4Pnsjzg714tvrRmiyyCCzeTu9jIP1O39VOZm3XR5MYis8EiNIc4jZCZz1VEo3Y/m81A8eJ3UYGooZ5DvZ3OQ8cVl8xI0puIJILkGqCiK9AQjQ8kHIRdFcAryjSUBrAAK0vKlJwLUABGh5RZOApgAEaGlelFmjIQABWpp9iTUyAQgo6fV4uT+QMIc5NToCEFKSe8E11JXxIylThHGCrgAExaXpuc5QGfNkWGqOyb2CU2TK5LXoiIuZv1BP6Ap0TliVbl/o8tUZaoF78g4vhKWu3eWEFxc1smNslAdJ5k3OXXmZ0S/lsmG5L5iWIqWpNi+uE7Eov83KNxPSJis2esRmi/hoFJ/eunqKFClSpEjB/49/l3pIoX36BroAAAAASUVORK5CYII=" className="cursor-pointer w-[25px] h-[25px] md:w-[50px] md:h-[50px]" alt="Drop-down" onClick={changeB1} />
                                </div>
                        }
                    </div>
                </div>
                {
                    !banner1 ?
                        <div className="transition-transform delay-500 duration-1000">
                            <div className="flex flex-cols items-center flex-wrap justify-center gap-[30px]">
                                <div className="grid grid-cols-2 md:gap-10">
                                    {/* <a href='#' target="_blank"> */}
                                        <div className="lg:w-[500px] md:[400px] p-3">
                                            {/* <img src={P2} alt='Wild Tumeric powder' className="rounded-lg" /> */}
                                            <Carousel images={imageFace2} />
                                            <div className="p-5">
                                                <h2 className="md:text-3xl font-bold mb-3">Wild Tumeric powder</h2>
                                                <p className="md:text-2xl font-semibold mb-3">Price: ₹200</p>
                                            </div>
                                            <a href="/" className="border-none px-5 py-3 text-xl font-semibold bg-black text-white rounded-xl mx-5">Order Now</a>
                                        </div>
                                    {/* </a> */}
                                    {/* <a href='#' target="_blank"> */}
                                        <div className=" lg:w-[500px] md:[400px] p-3">
                                            {/* <img src={P1} alt="Herbal wild Tumeric powder" className="rounded-lg" /> */}
                                            <Carousel images={imageFace1} />
                                            <div className="p-5">
                                                <h2 className="md:text-3xl font-bold mb-3">Herbal wild Tumeric powder</h2>
                                                <p className="md:text-2xl font-semibold mb-3">Price: ₹300</p>
                                            </div>
                                            <a href="/" className="border-none px-5 py-3 text-xl font-semibold bg-black text-white rounded-xl mx-5">Order Now</a>
                                        </div>
                                    {/* </a> */}
                                </div>
                            </div>
                        </div> :
                        <div></div>
                }
            </div>

            <div className="">
                <div className="relative px-[10px] py-[20px] md:py-[50px] lg:p-[100px]">
                    <div className="relative">
                        <img src={B3} alt="Banner 3" className="rounded-lg" />
                        {
                            banner3 ?

                                <div className="absolute bottom-0 right-0 mr-[20px] mb-[10px]">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZklEQVR4nO2aTUtVURSGn6JPyz7oO2/QH0izaTpo3MTsN0QlNG6UNmyepok/QNFZBIUlRd+YoWQZiQUh6sBEiQZidmLDEi6Xe889e699rvvGeeGdXM5ea73r7rP32utsyJAhQ4YMGTIokAOagEtAG9ABdAJDwAjwXjgNzABzwBKwAkTCFfltTp6Zzhs3IrY6xXab+GoS35uCs0APsJAnYrNoYugGGiohfB/QB6wHILyQJqZeoDYt8aeAjwEILceJNF6NWjEcVQk/Aft9JqAvAFG2NK+DtwVvPQBBtjQx1/tIQE8AYlzZ5SMBCwEIceW8VnwuABFa1mkS0ByAAC1NxeiMywEI0LJVk4C2AARoeU2TgNsBCNCyXZOAewEI0PKuJgFDAQjQckCTgGcBCNDS9BOc8dbS2RtgNUUxq+LDNiZnTFg4egrsBM6nVD0uAheA7cAji3EfNAn4ktDJaEEjIiftLF/izR9xOs9+DfDa4mjsjG8JHPwFGouM3QMMehA/KLYK0Si+y403PUZnzCUMcrpEzb0FuOl4nDbi7gBbi9g9BnxOaGdWk4Ali4C/AidL2LlY0AUux18xJexRmdY2a4czflv+a2bNOFHC1pmEr9QP4FyM+EnLmEwynfHHYepOAcdL2DsEPIkZ+0JEFsMRx6bsWqUTEMmqfbiEzW3ybheOuS9bXDEcBMYcY1mr5CsQ5XFc/vFSuCKFjQnwRsxzB2SbdY1D9Qr8VDiOpBYwAuIaLs1lxGvricVKbINRDMdkCrt8hbItxb1vg989BLBRjxtBSWEKn+eefM9UohSOEvBVwu92NZ5PoapSeNxjIIYvgb1lxI949qk6DL3zHMzGXl+stt8tJ0rf/syhKbiGyLAIzhc/HGJDZDCloAwfA7uAHcCDFP30axLQlWJghg+FwTZFO1IOrhK8pUnA9QAEaHlVk4DWAARoaW6UOaMpAAFamiatM3IBCNjUz+PVfkHCHObU6A5AiCvN7VI1Gqr4kpTpQ3pBbwCCbGlmrjfUpnAyTJOTlv2HxDtCNdwWHfex8sfNhN5A14R1mfZx/QZvqJfbI/OBbHVdPhc8W9RJxdgiF5La5QQ2IGf8UensTkl/blY+uS3niViW32blmSkZMyo2BsRmu/hoEZ+pTfUMGTJkyJCB/x//AOLbSKZkyn6XAAAAAElFTkSuQmCC" className="cursor-pointer w-[25px] h-[25px] md:w-[50px] md:h-[50px]" onClick={changeB3} alt="Drop-down" />
                                </div>
                                :
                                <div className="absolute bottom-0 right-0 mr-[20px] mb-[10px]">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADVklEQVR4nO2aTUuUURTHf0WvlqX0nhP0BdJsmy1atzH7DFEJrVulLVuXpokfINFdBJUlvZoxFkqakmgQYi5KlGghZhMXjiCDzzjPPfc+cyeeP/w3w3PPOf8z9/XcCylSpEiRIkUKBTJAA3ARaAZagTagDxgAhoVTwDQwBywAS0BOuCS/zck3U+vaDYitNrHdLL4axHdJcBroBObXiSgVTQwdQF0SwvcB3cBqAMLzaWLqAip9iT8BfApA6GYc9TE0KsVwrkw4Dux3mYDuAETFpRkOzia81QAExaWJudZFAjoDEGPLdhcJmA9AiC2/a8VnAhChZY0mAecCEKCl2TFa41IAArRs0iSgOQABWl7VJOBWAAK0bNEkoN1zcI+EPn2YU6Q1+jwG9gTYBewAHnr006NJwAtPQT0V8WvYDfR78mXqCdZ47yGgV8CeDXyZJDz34G9Qk4BRx8G8AfYW8Fch/5hLnx81CZh0GMjbIosVFY6HnjkaW+Orw24Yp1JjhshLR75NjdEacw4C+ABUW5bfhhz4n9Uk4KfSeRao2uSsYRiFKqkMa2L4oUnAb4XjEeBAAduXgWVgBbi+SRKyijh+aRLwx9KpWT0ORtjcBtzeoM19YHtEm2oZSjaxrCSdgAngaIQ90yOeFWj7Gjgc0faQZVV6JckhMAkci7B1CpgpwsY34EyEDZOcsSSHwEIMR1+A4xF2LuRdhRUTdFOBJIwnNQnOFelkKqL0tAW4YVlV/itzxdYN7B4BPiexDM4UGWh9xGam10J4Pnsjzg714tvrRmiyyCCzeTu9jIP1O39VOZm3XR5MYis8EiNIc4jZCZz1VEo3Y/m81A8eJ3UYGooZ5DvZ3OQ8cVl8xI0puIJILkGqCiK9AQjQ8kHIRdFcAryjSUBrAAK0vKlJwLUABGh5RZOApgAEaGlelFmjIQABWpp9iTUyAQgo6fV4uT+QMIc5NToCEFKSe8E11JXxIylThHGCrgAExaXpuc5QGfNkWGqOyb2CU2TK5LXoiIuZv1BP6Ap0TliVbl/o8tUZaoF78g4vhKWu3eWEFxc1smNslAdJ5k3OXXmZ0S/lsmG5L5iWIqWpNi+uE7Eov83KNxPSJis2esRmi/hoFJ/eunqKFClSpEjB/49/l3pIoX36BroAAAAASUVORK5CYII=" className="cursor-pointer w-[25px] h-[25px] md:w-[50px] md:h-[50px]" alt="Drop-down" onClick={changeB3} />
                                </div>
                        }
                    </div>
                </div>
                {
                    !banner3 ?
                        <div className="transition-transform delay-500 duration-1000">
                            <div className="flex flex-cols items-center flex-wrap justify-center gap-[30px]">
                                <div className="grid grid-cols-2 md:gap-10">
                                    {/* <a href='#' target="_blank"> */}
                                        <div className="lg:w-[500px] md:[400px] p-3">
                                            <img src={P13} alt='Wild Tumeric powder sachet' className="rounded-lg drop-shadow-lg shadow-black" />
                                            <div className="p-5">
                                                <h2 className="md:text-3xl font-bold mb-3">Herbal Wild Tumeric powder</h2>
                                                <p className="md:text-2xl font-semibold mb-3">Price: ₹200</p>
                                            </div>
                                            <a href="/" className="border-none px-5 py-3 text-xl font-semibold bg-black text-white rounded-xl mx-5">Order Now</a>
                                        </div>
                                    {/* </a> */}
                                    {/* <a href='#' target="_blank"> */}
                                        <div className=" lg:w-[500px] md:[400px] p-3">
                                            <img src={P14} alt="Wild Tumeric powder" className="rounded-lg drop-shadow-lg shadow-black" />
                                            <div className="p-5">
                                                <h2 className="md:text-3xl font-bold mb-3">Wild Tumeric powder</h2>
                                                <p className="md:text-2xl font-semibold mb-3">Price: ₹300</p>
                                            </div>
                                            <a href="/" className="border-none px-5 py-3 text-xl font-semibold bg-black text-white rounded-xl mx-5">Order Now</a>
                                        </div>
                                    {/* </a> */}
                                    {/* <a href='#' target="_blank"> */}
                                        <div className=" lg:w-[500px] md:[400px] p-3">
                                            <img src={P15} alt="Natural face Tumeric powder" className="rounded-lg drop-shadow-lg shadow-black" />
                                            <div className="p-5">
                                                <h2 className="md:text-3xl font-bold mb-3">Natural Face Tumeric powder</h2>
                                                <p className="md:text-2xl font-semibold mb-3">Price: ₹300</p>
                                            </div>
                                            <a href="/" className="border-none px-5 py-3 text-xl font-semibold bg-black text-white rounded-xl mx-5">Order Now</a>
                                        </div>
                                    {/* </a> */}
                                    {/* <a href='#' target="_blank"> */}
                                        <div className=" lg:w-[500px] md:[400px] p-3">
                                            <img src={P16} alt="Pepper Tumeric powder" className="rounded-lg drop-shadow-lg shadow-black" />
                                            <div className="p-5">
                                                <h2 className="md:text-3xl font-bold mb-3">Pepper Tumeric powder</h2>
                                                <p className="md:text-2xl font-semibold mb-3">Price: ₹300</p>
                                            </div>
                                            <a href="/" className="border-none px-5 py-3 text-xl font-semibold bg-black text-white rounded-xl mx-5">Order Now</a>
                                        </div>
                                    {/* </a> */}
                                    {/* <a href='#' target="_blank"> */}
                                        <div className=" lg:w-[500px] md:[400px] p-3">
                                            <img src={P17} alt="Tumeric powder" className="rounded-lg drop-shadow-lg shadow-black" />
                                            <div className="p-5">
                                                <h2 className="md:text-3xl font-bold mb-3">Tumeric powder</h2>
                                                <p className="md:text-2xl font-semibold mb-3">Price: ₹300</p>
                                            </div>
                                            <a href="/" className="border-none px-5 py-3 text-xl font-semibold bg-black text-white rounded-xl mx-5">Order Now</a>
                                        </div>
                                    {/* </a> */}
                                    {/* <a href='#' target="_blank"> */}
                                        <div className=" lg:w-[500px] md:[400px] p-3">
                                            <img src={P18} alt="Pasu Tumeric powder" className="rounded-lg drop-shadow-lg shadow-black" />
                                            <div className="p-5">
                                                <h2 className="md:text-3xl font-bold mb-3">Pasu Tumeric powder</h2>
                                                <p className="md:text-2xl font-semibold mb-3">Price: ₹300</p>
                                            </div>
                                            <a href="/" className="border-none px-5 py-3 text-xl font-semibold bg-black text-white rounded-xl mx-5">Order Now</a>
                                        </div>
                                    {/* </a> */}
                                </div>
                            </div>
                        </div> :
                        <div></div>
                }
            </div>
            <div className='sticky bottom-0 right-0 px-3 pb-3 flex justify-end'>
                <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=%2B919600957373&text&type=phone_number&app_absent=0" className="bg-green-500 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30 " viewBox="0 0 47 47">
                        <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
                    </svg>
                </a>

            </div>
        </div>
    )
}
export default Store