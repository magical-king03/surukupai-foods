import React, { useState } from "react";
import B1 from '../img/Banner (1).png';
import B2 from '../img/Banner (2).png';
import B3 from '../img/Banner (3).png';
import P1 from '../img/Product (1).png';
import P2 from '../img/Product (2).png';
import P3 from '../img/Product (3).png';
import P4 from '../img/Product (4).png';

function Store() {
    document.title = 'Store';
    const [banner1, setBanner1] = useState(true);
    const [banner2, setBanner2] = useState(true);
    const [banner3, setBanner3] = useState(true);
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
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZklEQVR4nO2aTUtVURSGn6JPyz7oO2/QH0izaTpo3MTsN0QlNG6UNmyepok/QNFZBIUlRd+YoWQZiQUh6sBEiQZidmLDEi6Xe889e699rvvGeeGdXM5ea73r7rP32utsyJAhQ4YMGTIokAOagEtAG9ABdAJDwAjwXjgNzABzwBKwAkTCFfltTp6Zzhs3IrY6xXab+GoS35uCs0APsJAnYrNoYugGGiohfB/QB6wHILyQJqZeoDYt8aeAjwEILceJNF6NWjEcVQk/Aft9JqAvAFG2NK+DtwVvPQBBtjQx1/tIQE8AYlzZ5SMBCwEIceW8VnwuABFa1mkS0ByAAC1NxeiMywEI0LJVk4C2AARoeU2TgNsBCNCyXZOAewEI0PKuJgFDAQjQckCTgGcBCNDS9BOc8dbS2RtgNUUxq+LDNiZnTFg4egrsBM6nVD0uAheA7cAji3EfNAn4ktDJaEEjIiftLF/izR9xOs9+DfDa4mjsjG8JHPwFGouM3QMMehA/KLYK0Si+y403PUZnzCUMcrpEzb0FuOl4nDbi7gBbi9g9BnxOaGdWk4Ali4C/AidL2LlY0AUux18xJexRmdY2a4czflv+a2bNOFHC1pmEr9QP4FyM+EnLmEwynfHHYepOAcdL2DsEPIkZ+0JEFsMRx6bsWqUTEMmqfbiEzW3ybheOuS9bXDEcBMYcY1mr5CsQ5XFc/vFSuCKFjQnwRsxzB2SbdY1D9Qr8VDiOpBYwAuIaLs1lxGvricVKbINRDMdkCrt8hbItxb1vg989BLBRjxtBSWEKn+eefM9UohSOEvBVwu92NZ5PoapSeNxjIIYvgb1lxI949qk6DL3zHMzGXl+stt8tJ0rf/syhKbiGyLAIzhc/HGJDZDCloAwfA7uAHcCDFP30axLQlWJghg+FwTZFO1IOrhK8pUnA9QAEaHlVk4DWAARoaW6UOaMpAAFamiatM3IBCNjUz+PVfkHCHObU6A5AiCvN7VI1Gqr4kpTpQ3pBbwCCbGlmrjfUpnAyTJOTlv2HxDtCNdwWHfex8sfNhN5A14R1mfZx/QZvqJfbI/OBbHVdPhc8W9RJxdgiF5La5QQ2IGf8UensTkl/blY+uS3niViW32blmSkZMyo2BsRmu/hoEZ+pTfUMGTJkyJCB/x//AOLbSKZkyn6XAAAAAElFTkSuQmCC" className="cursor-pointer h-[25px] w-[25px] md:w-[50px] md:h-[50px]" onClick={changeB2} />
                            </div>
                            :
                            <div className="absolute bottom-0 right-0 mr-[20px] mb-[10px]">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADVklEQVR4nO2aTUuUURTHf0WvlqX0nhP0BdJsmy1atzH7DFEJrVulLVuXpokfINFdBJUlvZoxFkqakmgQYi5KlGghZhMXjiCDzzjPPfc+cyeeP/w3w3PPOf8z9/XcCylSpEiRIkUKBTJAA3ARaAZagTagDxgAhoVTwDQwBywAS0BOuCS/zck3U+vaDYitNrHdLL4axHdJcBroBObXiSgVTQwdQF0SwvcB3cBqAMLzaWLqAip9iT8BfApA6GYc9TE0KsVwrkw4Dux3mYDuAETFpRkOzia81QAExaWJudZFAjoDEGPLdhcJmA9AiC2/a8VnAhChZY0mAecCEKCl2TFa41IAArRs0iSgOQABWl7VJOBWAAK0bNEkoN1zcI+EPn2YU6Q1+jwG9gTYBewAHnr006NJwAtPQT0V8WvYDfR78mXqCdZ47yGgV8CeDXyZJDz34G9Qk4BRx8G8AfYW8Fch/5hLnx81CZh0GMjbIosVFY6HnjkaW+Orw24Yp1JjhshLR75NjdEacw4C+ABUW5bfhhz4n9Uk4KfSeRao2uSsYRiFKqkMa2L4oUnAb4XjEeBAAduXgWVgBbi+SRKyijh+aRLwx9KpWT0ORtjcBtzeoM19YHtEm2oZSjaxrCSdgAngaIQ90yOeFWj7Gjgc0faQZVV6JckhMAkci7B1CpgpwsY34EyEDZOcsSSHwEIMR1+A4xF2LuRdhRUTdFOBJIwnNQnOFelkKqL0tAW4YVlV/itzxdYN7B4BPiexDM4UGWh9xGam10J4Pnsjzg714tvrRmiyyCCzeTu9jIP1O39VOZm3XR5MYis8EiNIc4jZCZz1VEo3Y/m81A8eJ3UYGooZ5DvZ3OQ8cVl8xI0puIJILkGqCiK9AQjQ8kHIRdFcAryjSUBrAAK0vKlJwLUABGh5RZOApgAEaGlelFmjIQABWpp9iTUyAQgo6fV4uT+QMIc5NToCEFKSe8E11JXxIylThHGCrgAExaXpuc5QGfNkWGqOyb2CU2TK5LXoiIuZv1BP6Ap0TliVbl/o8tUZaoF78g4vhKWu3eWEFxc1smNslAdJ5k3OXXmZ0S/lsmG5L5iWIqWpNi+uE7Eov83KNxPSJis2esRmi/hoFJ/eunqKFClSpEjB/49/l3pIoX36BroAAAAASUVORK5CYII=" className="cursor-pointer w-[25px] h-[25px] md:w-[50px] md:h-[50px]" onClick={changeB2} />
                            </div>
                    }
                    </div>
                </div>
                {
                    !banner2 ?
                        <div className="transition-transform delay-500 duration-1000">
                            <div className="flex flex-cols items-center flex-wrap justify-center gap-[30px]">
                                <div className="grid grid-cols-2 md:gap-10">
                                    <a href='#' target="_blank">
                                        <div className="lg:w-[500px] md:[400px] p-3">
                                            <img src={P3} alt='Tumeric powder 1' className="rounded-lg" />
                                            <div className="p-5">
                                                <h2 className="md:text-3xl font-bold">Tumeric powder(100g)</h2>
                                                <p className="md:text-2xl font-semibold">Price: ₹100</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href='#' target="_blank">
                                        <div className=" lg:w-[500px] md:[400px] p-3">
                                            <img src={P4} alt="Tumeric powder 2" className="rounded-lg" />
                                            <div className="p-5">
                                                <h2 className="md:text-3xl font-bold">Tumeric powder(250g)</h2>
                                                <p className="md:text-2xl font-semibold">Price: ₹250</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="grid grid-cols-2 gap-10">
                                    <a href='#' target="_blank">
                                        <div className=" lg:w-[500px] md:[400px] p-3">
                                            <img src={P3} alt="Tumeric powder 3" className="rounded-lg" />
                                            <div className="p-5">
                                                <h2 className="md:text-xl font-bold">Pepper Tumeric powder</h2>
                                                <p className="md:text-xl font-semibold">Price: 150</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href='#' target="_blank">
                                        <div className=" lg:w-[500px] md:[400px] p-3">
                                            <img src={P4} alt="Tumeric powder 4" className="rounded-lg" />
                                            <div className="p-5">
                                                <h2 className="md:text-xl font-bold">Pepper Tumeric powder</h2>
                                                <p className="md:text-xl font-semibold">Price: 300</p>
                                            </div>
                                        </div>
                                    </a>
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
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZklEQVR4nO2aTUtVURSGn6JPyz7oO2/QH0izaTpo3MTsN0QlNG6UNmyepok/QNFZBIUlRd+YoWQZiQUh6sBEiQZidmLDEi6Xe889e699rvvGeeGdXM5ea73r7rP32utsyJAhQ4YMGTIokAOagEtAG9ABdAJDwAjwXjgNzABzwBKwAkTCFfltTp6Zzhs3IrY6xXab+GoS35uCs0APsJAnYrNoYugGGiohfB/QB6wHILyQJqZeoDYt8aeAjwEILceJNF6NWjEcVQk/Aft9JqAvAFG2NK+DtwVvPQBBtjQx1/tIQE8AYlzZ5SMBCwEIceW8VnwuABFa1mkS0ByAAC1NxeiMywEI0LJVk4C2AARoeU2TgNsBCNCyXZOAewEI0PKuJgFDAQjQckCTgGcBCNDS9BOc8dbS2RtgNUUxq+LDNiZnTFg4egrsBM6nVD0uAheA7cAji3EfNAn4ktDJaEEjIiftLF/izR9xOs9+DfDa4mjsjG8JHPwFGouM3QMMehA/KLYK0Si+y403PUZnzCUMcrpEzb0FuOl4nDbi7gBbi9g9BnxOaGdWk4Ali4C/AidL2LlY0AUux18xJexRmdY2a4czflv+a2bNOFHC1pmEr9QP4FyM+EnLmEwynfHHYepOAcdL2DsEPIkZ+0JEFsMRx6bsWqUTEMmqfbiEzW3ybheOuS9bXDEcBMYcY1mr5CsQ5XFc/vFSuCKFjQnwRsxzB2SbdY1D9Qr8VDiOpBYwAuIaLs1lxGvricVKbINRDMdkCrt8hbItxb1vg989BLBRjxtBSWEKn+eefM9UohSOEvBVwu92NZ5PoapSeNxjIIYvgb1lxI949qk6DL3zHMzGXl+stt8tJ0rf/syhKbiGyLAIzhc/HGJDZDCloAwfA7uAHcCDFP30axLQlWJghg+FwTZFO1IOrhK8pUnA9QAEaHlVk4DWAARoaW6UOaMpAAFamiatM3IBCNjUz+PVfkHCHObU6A5AiCvN7VI1Gqr4kpTpQ3pBbwCCbGlmrjfUpnAyTJOTlv2HxDtCNdwWHfex8sfNhN5A14R1mfZx/QZvqJfbI/OBbHVdPhc8W9RJxdgiF5La5QQ2IGf8UensTkl/blY+uS3niViW32blmSkZMyo2BsRmu/hoEZ+pTfUMGTJkyJCB/x//AOLbSKZkyn6XAAAAAElFTkSuQmCC" className="cursor-pointer w-[25px] h-[25px] md:w-[50px] md:md:h-[50px]" onClick={changeB1} />
                            </div>
                            :
                            <div className="absolute bottom-0 right-0 mr-[20px] mb-[10px]">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADVklEQVR4nO2aTUuUURTHf0WvlqX0nhP0BdJsmy1atzH7DFEJrVulLVuXpokfINFdBJUlvZoxFkqakmgQYi5KlGghZhMXjiCDzzjPPfc+cyeeP/w3w3PPOf8z9/XcCylSpEiRIkUKBTJAA3ARaAZagTagDxgAhoVTwDQwBywAS0BOuCS/zck3U+vaDYitNrHdLL4axHdJcBroBObXiSgVTQwdQF0SwvcB3cBqAMLzaWLqAip9iT8BfApA6GYc9TE0KsVwrkw4Dux3mYDuAETFpRkOzia81QAExaWJudZFAjoDEGPLdhcJmA9AiC2/a8VnAhChZY0mAecCEKCl2TFa41IAArRs0iSgOQABWl7VJOBWAAK0bNEkoN1zcI+EPn2YU6Q1+jwG9gTYBewAHnr006NJwAtPQT0V8WvYDfR78mXqCdZ47yGgV8CeDXyZJDz34G9Qk4BRx8G8AfYW8Fch/5hLnx81CZh0GMjbIosVFY6HnjkaW+Orw24Yp1JjhshLR75NjdEacw4C+ABUW5bfhhz4n9Uk4KfSeRao2uSsYRiFKqkMa2L4oUnAb4XjEeBAAduXgWVgBbi+SRKyijh+aRLwx9KpWT0ORtjcBtzeoM19YHtEm2oZSjaxrCSdgAngaIQ90yOeFWj7Gjgc0faQZVV6JckhMAkci7B1CpgpwsY34EyEDZOcsSSHwEIMR1+A4xF2LuRdhRUTdFOBJIwnNQnOFelkKqL0tAW4YVlV/itzxdYN7B4BPiexDM4UGWh9xGam10J4Pnsjzg714tvrRmiyyCCzeTu9jIP1O39VOZm3XR5MYis8EiNIc4jZCZz1VEo3Y/m81A8eJ3UYGooZ5DvZ3OQ8cVl8xI0puIJILkGqCiK9AQjQ8kHIRdFcAryjSUBrAAK0vKlJwLUABGh5RZOApgAEaGlelFmjIQABWpp9iTUyAQgo6fV4uT+QMIc5NToCEFKSe8E11JXxIylThHGCrgAExaXpuc5QGfNkWGqOyb2CU2TK5LXoiIuZv1BP6Ap0TliVbl/o8tUZaoF78g4vhKWu3eWEFxc1smNslAdJ5k3OXXmZ0S/lsmG5L5iWIqWpNi+uE7Eov83KNxPSJis2esRmi/hoFJ/eunqKFClSpEjB/49/l3pIoX36BroAAAAASUVORK5CYII=" className="cursor-pointer w-[25px] h-[25px] md:w-[50px] md:h-[50px]" onClick={changeB1} />
                            </div>
                    }
                    </div>
                </div>
                {
                    !banner1 ?
                        <div className="transition-transform delay-500 duration-1000">
                            <div className="flex flex-cols items-center flex-wrap justify-center gap-[30px]">
                                <div className="grid grid-cols-2 gap-10">
                                    <a href='#' target="_blank">
                                        <div className="lg:w-[500px] md:[400px] p-3">
                                            <img src={P2} alt='Wild Tumeric powder' className="rounded-lg" />
                                            <div className="p-5">
                                                <h2 className="md:text-xl font-bold">Wild Tumeric powder</h2>
                                                <p className="md:text-xl font-semibold">Price: 200</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href='#' target="_blank">
                                        <div className=" lg:w-[500px] md:[400px] p-3">
                                            <img src={P1} alt="Herbal wild Tumeric powder" className="rounded-lg" />
                                            <div className="p-5">
                                                <h2 className="md:text-xl font-bold">Herbal wild Tumeric powder</h2>
                                                <p className="md:text-xl font-semibold">Price: 300</p>
                                            </div>
                                        </div>
                                    </a>
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
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZklEQVR4nO2aTUtVURSGn6JPyz7oO2/QH0izaTpo3MTsN0QlNG6UNmyepok/QNFZBIUlRd+YoWQZiQUh6sBEiQZidmLDEi6Xe889e699rvvGeeGdXM5ea73r7rP32utsyJAhQ4YMGTIokAOagEtAG9ABdAJDwAjwXjgNzABzwBKwAkTCFfltTp6Zzhs3IrY6xXab+GoS35uCs0APsJAnYrNoYugGGiohfB/QB6wHILyQJqZeoDYt8aeAjwEILceJNF6NWjEcVQk/Aft9JqAvAFG2NK+DtwVvPQBBtjQx1/tIQE8AYlzZ5SMBCwEIceW8VnwuABFa1mkS0ByAAC1NxeiMywEI0LJVk4C2AARoeU2TgNsBCNCyXZOAewEI0PKuJgFDAQjQckCTgGcBCNDS9BOc8dbS2RtgNUUxq+LDNiZnTFg4egrsBM6nVD0uAheA7cAji3EfNAn4ktDJaEEjIiftLF/izR9xOs9+DfDa4mjsjG8JHPwFGouM3QMMehA/KLYK0Si+y403PUZnzCUMcrpEzb0FuOl4nDbi7gBbi9g9BnxOaGdWk4Ali4C/AidL2LlY0AUux18xJexRmdY2a4czflv+a2bNOFHC1pmEr9QP4FyM+EnLmEwynfHHYepOAcdL2DsEPIkZ+0JEFsMRx6bsWqUTEMmqfbiEzW3ybheOuS9bXDEcBMYcY1mr5CsQ5XFc/vFSuCKFjQnwRsxzB2SbdY1D9Qr8VDiOpBYwAuIaLs1lxGvricVKbINRDMdkCrt8hbItxb1vg989BLBRjxtBSWEKn+eefM9UohSOEvBVwu92NZ5PoapSeNxjIIYvgb1lxI949qk6DL3zHMzGXl+stt8tJ0rf/syhKbiGyLAIzhc/HGJDZDCloAwfA7uAHcCDFP30axLQlWJghg+FwTZFO1IOrhK8pUnA9QAEaHlVk4DWAARoaW6UOaMpAAFamiatM3IBCNjUz+PVfkHCHObU6A5AiCvN7VI1Gqr4kpTpQ3pBbwCCbGlmrjfUpnAyTJOTlv2HxDtCNdwWHfex8sfNhN5A14R1mfZx/QZvqJfbI/OBbHVdPhc8W9RJxdgiF5La5QQ2IGf8UensTkl/blY+uS3niViW32blmSkZMyo2BsRmu/hoEZ+pTfUMGTJkyJCB/x//AOLbSKZkyn6XAAAAAElFTkSuQmCC" className="cursor-pointer w-[25px] h-[25px] md:w-[50px] md:h-[50px]" onClick={changeB3} />
                            </div>
                            :
                            <div className="absolute bottom-0 right-0 mr-[20px] mb-[10px]">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADVklEQVR4nO2aTUuUURTHf0WvlqX0nhP0BdJsmy1atzH7DFEJrVulLVuXpokfINFdBJUlvZoxFkqakmgQYi5KlGghZhMXjiCDzzjPPfc+cyeeP/w3w3PPOf8z9/XcCylSpEiRIkUKBTJAA3ARaAZagTagDxgAhoVTwDQwBywAS0BOuCS/zck3U+vaDYitNrHdLL4axHdJcBroBObXiSgVTQwdQF0SwvcB3cBqAMLzaWLqAip9iT8BfApA6GYc9TE0KsVwrkw4Dux3mYDuAETFpRkOzia81QAExaWJudZFAjoDEGPLdhcJmA9AiC2/a8VnAhChZY0mAecCEKCl2TFa41IAArRs0iSgOQABWl7VJOBWAAK0bNEkoN1zcI+EPn2YU6Q1+jwG9gTYBewAHnr006NJwAtPQT0V8WvYDfR78mXqCdZ47yGgV8CeDXyZJDz34G9Qk4BRx8G8AfYW8Fch/5hLnx81CZh0GMjbIosVFY6HnjkaW+Orw24Yp1JjhshLR75NjdEacw4C+ABUW5bfhhz4n9Uk4KfSeRao2uSsYRiFKqkMa2L4oUnAb4XjEeBAAduXgWVgBbi+SRKyijh+aRLwx9KpWT0ORtjcBtzeoM19YHtEm2oZSjaxrCSdgAngaIQ90yOeFWj7Gjgc0faQZVV6JckhMAkci7B1CpgpwsY34EyEDZOcsSSHwEIMR1+A4xF2LuRdhRUTdFOBJIwnNQnOFelkKqL0tAW4YVlV/itzxdYN7B4BPiexDM4UGWh9xGam10J4Pnsjzg714tvrRmiyyCCzeTu9jIP1O39VOZm3XR5MYis8EiNIc4jZCZz1VEo3Y/m81A8eJ3UYGooZ5DvZ3OQ8cVl8xI0puIJILkGqCiK9AQjQ8kHIRdFcAryjSUBrAAK0vKlJwLUABGh5RZOApgAEaGlelFmjIQABWpp9iTUyAQgo6fV4uT+QMIc5NToCEFKSe8E11JXxIylThHGCrgAExaXpuc5QGfNkWGqOyb2CU2TK5LXoiIuZv1BP6Ap0TliVbl/o8tUZaoF78g4vhKWu3eWEFxc1smNslAdJ5k3OXXmZ0S/lsmG5L5iWIqWpNi+uE7Eov83KNxPSJis2esRmi/hoFJ/eunqKFClSpEjB/49/l3pIoX36BroAAAAASUVORK5CYII=" className="cursor-pointer w-[25px] h-[25px] md:w-[50px] md:h-[50px]" onClick={changeB3} />
                            </div>
                    }
                    </div>
                </div>
                {
                    !banner3 ?
                        <div className="transition-transform delay-500 duration-1000">
                            <div className="flex flex-cols items-center flex-wrap justify-center gap-[30px]">
                                <div className="grid grid-cols-2 gap-10">
                                    <a href='#' target="_blank">
                                        <div className="lg:w-[500px] md:[400px] p-3">
                                            <img src={P2} alt='Wild Tumeric powder' className="rounded-lg" />
                                            <div className="p-5">
                                                <h2 className="md:text-xl font-bold">Wild Tumeric powder</h2>
                                                <p className="md:text-xl font-semibold">Price: 200</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href='#' target="_blank">
                                        <div className=" lg:w-[500px] md:[400px] p-3">
                                            <img src={P1} alt="Herbal wild Tumeric powder" className="rounded-lg" />
                                            <div className="p-5">
                                                <h2 className="md:text-xl font-bold">Herbal wild Tumeric powder</h2>
                                                <p className="md:text-xl font-semibold">Price: 300</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>                                
                            </div>
                        </div> :
                        <div></div>
                }
            </div>
        </div>
    )
}
export default Store