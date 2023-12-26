function Store(props) {
    return (
        <div>
            <h1 className="text-5xl p-6 text-bold">Our Products</h1>
            <div className="mt-[30px] flex items-center flex-wrap justify-center gap-[30px]">

                <a href='#' target="_blank">
                    <div className=" w-[375px]">
                        <img src='https://source.unsplash.com/1600x800/?food' className="h-[300px] w-[375px] rounded-lg" />
                        <div className="flex items-center justify-between p-5">
                            <h2 className="text-3xl">Product Title</h2>
                            <p className="text-2xl">Price</p>
                        </div>
                    </div>
                </a>
                <a href='#' target="_blank">
                    <div className=" w-[375px]">
                        <img src='https://source.unsplash.com/1600x800/?food' className="h-[300px] w-[375px] rounded-lg" />
                        <div className="flex items-center justify-between p-5">
                            <h2 className="text-3xl">Product Title</h2>
                            <p className="text-2xl">Price</p>
                        </div>
                    </div>
                </a>
                <a href='#' target="_blank">
                    <div className=" w-[375px]">
                        <img src='https://source.unsplash.com/1600x800/?food' className="h-[300px] w-[375px] rounded-lg" />
                        <div className="flex items-center justify-between p-5">
                            <h2 className="text-3xl">Product Title</h2>
                            <p className="text-2xl">Price</p>
                        </div>
                    </div>
                </a>

            </div>

        </div>
    )
}
export default Store