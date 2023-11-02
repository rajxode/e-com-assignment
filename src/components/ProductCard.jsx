import { useNavigate } from "react-router-dom";




const ProductCard = (props) => {

    const {product} = props;

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/single-product');
    }

    return(
        <>
            <div className="w-[300px] h-[475px] bg-[#ffffff] p-2 rounded flex flex-col justify-between mb-[30px] relative transition ease-in-out hover:scale-105 hover:z-10 hover:shadow-md hover:shadow-slate-600">
                
                <div className="absolute w-fit h-fit right-5 top-3 text-slate-300 text-xl">
                <i class="fa-solid fa-heart"></i>
                </div>
                
                <div className="w-full h-2/3 cursor-pointer" 
                    onClick={handleClick}>
                    <img src={product.thumbnail} alt="pic" className="w-full h-full" />
                </div>

                <div className="h-1/3 w-full flex flex-col justify-between pt-2">
                    <div className="h-[30%] w-full font-semibold flex flex-col">
                        <span className="w-full overflow-hidden cursor-pointer hover:text-blue-400"
                            onClick={handleClick}>
                            {product.title}
                        </span>
                        <span className="text-sm font-normal text-slate-400">
                            {product.brand}
                        </span>
                    </div>
                    <div className="h-2/3 w-full flex flex-col justify-between text-xl">
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