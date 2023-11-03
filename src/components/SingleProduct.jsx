import { useSelector } from "react-redux";
import { productSelector } from "../Redux/Reducers/productReducer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
    background-color:transparent;
    width:100%;
    height:93vh;
    display:flex;
    justify-content:space-around;
    padding:8px 5%;
    @media (max-width:1150px){
        padding:8px 2%;
    }
    @media (max-width:1050px){
        padding:8px;
    }
    @media (max-width:775px){
        flex-direction:column;
    }
`;


const ImageContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:33%;
    height:100%;
    padding:8px;
    @media (max-width:1050px){
        width:45%;
    }
    @media (max-width:775px){
        width:100%;
        height:60%;
    }
`;


const MainContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:66%;
    height:100%;
    justify-content:space-between;
    padding:8px;
    @media (max-width:1050px){
        width:55%;
    }
    @media (max-width:775px){
        width:100%;
        img{
            width:100%;
        }
    }
`;

const SingleProduct = () => {

    const { singleProduct } = useSelector(productSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if(!singleProduct){
            navigate(-1);
        }
    },[singleProduct]);

    return(
        <Container>
                <ImageContainer className="w-1/3 h-full p-2 flex flex-col">
                    <div className="w-full h-3/5 flex justify-center items-center border relative overflow-hidden p-2">
                        <div className="absolute w-fit h-fit right-5 top-3 text-slate-300 text-xl cursor-pointer">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <img src={singleProduct.thumbnail} alt="image" className="w-[95%] h-auto" />
                    </div>
                    <div className="w-full h-1/5 flex justify-around items-center text-lg">
                        <button className="w-2/5 min-h-[50px] flex justify-center items-center text-white font-semibold bg-yellow-500 shadow cursor-not-allowed"
                                disabled>
                            <span>
                                <i class="fa-solid fa-cart-shopping"></i> 
                            </span>
                            &nbsp;
                            Add to Cart
                        </button>
                        <button className="w-2/5 min-h-[50px] flex justify-center items-center text-white font-semibold bg-orange-600 shadow cursor-not-allowed"
                                disabled>
                            <span>
                                <i class="fa-solid fa-bolt"></i>
                            </span>
                            &nbsp;
                            Buy Now
                        </button>
                    </div>
                </ImageContainer>
                <MainContainer className="overflow-y-scroll"> 
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
                                </span>{singleProduct.price * 80} <span className="text-sm text-green-600">
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
                </MainContainer>
        </Container>
    )
}

export default SingleProduct;