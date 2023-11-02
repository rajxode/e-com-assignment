

const SingleProduct = () => {

    const singleProduct = {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    };

    return(
        <div className="bg-transparent w-full h-[93vh] flex justify-around px-[5%] py-2">
            <div className="bg-white w-full flex flex-wrap">
                <div className="w-1/3 h-full p-2 flex flex-col">
                    <div className="w-full h-3/5 flex justify-center items-center border relative">
                        <div className="absolute w-fit h-fit right-5 top-3 text-slate-300 text-xl cursor-pointer">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <img src={singleProduct.thumbnail} alt="image" className="w-[95%] h-auto" />
                    </div>
                    <div className="w-full h-1/5 flex justify-around items-center text-lg">
                        <button className="w-2/5 min-h-[50px] flex justify-center items-center text-white font-semibold bg-yellow-500 shadow">
                            <span>
                                <i class="fa-solid fa-cart-shopping"></i> 
                            </span>
                            &nbsp;
                            Add to Cart
                        </button>
                        <button className="w-2/5 min-h-[50px] flex justify-center items-center text-white font-semibold bg-orange-600 shadow">
                            <span>
                                <i class="fa-solid fa-bolt"></i>
                            </span>
                            &nbsp;
                            Buy Now
                        </button>
                    </div>
                </div>
                <div className="w-2/3 h-full flex flex-col justify-between p-2 overflow-y-scroll"> 
                    <div className="h-auto w-full flex flex-col justify-between pt-2">
                        <div className="w-full font-semibold flex flex-col my-2 max-h-[100px]">
                            <span className="w-full text-2xl">
                                {singleProduct.title}
                            </span>
                            <span className="text-sm font-normal text-slate-400 w-full">
                                {singleProduct.brand}
                            </span>
                        </div>
                        <div className="w-full flex flex-col justify-between my-2">
                            <div className="w-fit bg-green-600 p-1 px-2 text-sm rounded text-white my-2">
                                {singleProduct.rating} <span>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                            </div>
                            <div className="font-bold mt-2 text-2xl">
                                <span> 
                                    ₹ 
                                </span>{singleProduct.price} <span className="text-sm text-green-600">
                                    Discount {singleProduct.discountPercentage}%
                                </span>
                            </div>
                            <div>
                                Free delivery
                            </div>
                            <div>
                                Big Saving Deal
                            </div>
                        </div>
                        <div className="mt-2">
                            In Stock : <span className="font-semibold">{singleProduct.stock}</span>
                        </div>
                        <div className="mt-2">
                            <h1 className="text-xl font-bold">
                                Product Description:
                            </h1>
                            <div className="font-semibold text-slate-600">
                                {singleProduct.description}
                            </div>
                        </div>
                        <div className="flex justify-between w-full flex-col mt-2">
                            <h1 className="text-lg font-bold">
                                More Images:
                            </h1>
                            {
                                singleProduct.images.map((image) => <img src={image} alt='image' className="w-2/3 h-auto my-2" />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;