



const ProductCard = (props) => {

    const {product} = props;

    return(
        <>
            <div className="w-[300px] h-[475px] bg-[#ffffff] p-2 rounded flex flex-col justify-between mb-[30px] relative">
                
                <div className="absolute w-fit h-fit right-5 top-3 text-slate-300 text-xl">
                <i class="fa-solid fa-heart"></i>
                </div>
                
                <div className="w-full h-2/3">
                    <img src={product.thumbnail} alt="pic" className="w-full h-full" />
                </div>

                <div className="h-1/3 w-full flex flex-col justify-between pt-2">
                    <div className="h-[30%] w-full font-semibold flex flex-col">
                        <span className="overflow-ellipsis cursor-pointer">
                            {product.title}
                        </span>
                        <span className="text-sm font-normal text-slate-400">
                            {product.category}
                        </span>
                    </div>
                    <div className="h-2/3 w-full flex flex-col justify-between">
                        <div className="font-semibold">
                            <span> 
                                ₹ 
                            </span> {product.price} <span className="text-xs text-green-600">
                                Discount {product.discountPercentage}%
                            </span>
                        </div>
                        <div className="w-fit bg-green-600 p-1 px-2 text-sm rounded text-white">
                            {product.rating} <span>
                                 <i class="fa-solid fa-star"></i>
                            </span>
                        </div>
                        <div className="text-xs">
                            Free delivery
                        </div>
                        <div className="text-xs">
                            Big Saving Deal
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard;