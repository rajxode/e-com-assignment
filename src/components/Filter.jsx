import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoryThunk, getProductByCategoryThunk, productSelector } from "../Redux/Reducers/productReducer";
import styled from "styled-components";


const Container = styled.div`
    width:15%;
    height:250px;
    background-color:#ffffff;
    border-radius:5px;
    display:flex;
    flex-direction:column;
`;

const Filter = (props) => {

    const { price , setPrice } = props;
    const dispatch = useDispatch();
    const { category } = useSelector(productSelector);

    useEffect(() => {
        dispatch(getAllCategoryThunk());
    },[]);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getProductByCategoryThunk({cat:e.target.value}));
    } 

    return(
        <>
            <Container className="shadow">
                <div className="w-full p-2 text-xl font-bold min-h-[35px] border-b">
                    Filter
                </div>
                <div className="flex flex-col border-b py-2">
                    <div className="w-full px-2 py-1 font-semibold">
                        Price
                    </div>
                    <div className="w-full p-2 pb-0">
                        <input type="range" 
                            min="1000" 
                            max="50000" 
                            step={100}
                            value={price}
                            className="w-full" 
                            onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="flex justify-between px-2 w-full">
                        <div>
                            1000
                        </div>
                        <div>
                            {   
                                price === 50000
                                ?
                                `${price}+`
                                :
                                price
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col py-2">
                    <div className="w-full px-2 py-1 font-semibold">
                        Category
                    </div>
                    <div className="w-full flex flex-col px-2 py-1">
                        <select name="category" className="flex flex-col focus:outline-none" onChange={handleClick}>
                            <option>Select Category</option>
                            {
                                category.map((cate,i) => <option key={i} value={cate} >{cate}</option>)
                            }
                        </select>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Filter;