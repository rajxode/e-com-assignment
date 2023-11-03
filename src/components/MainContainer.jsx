
import Filter from "./Filter";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getInitialProductThunk, productSelector, setCurrentPage, setSelectedCategory } from "../Redux/Reducers/productReducer";
import { useEffect, useState } from "react";
import Loader from './Spinner';
import ShowProducts from "./ShowProducts";
import styled from "styled-components";


const Container = styled.div`
    width:100%;
    height:100%;
    min-height:93vh;
    padding:8px 1%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    @media (max-width:680px){
        flex-direction:column;
    }
`;

const MainContainer = () => {

    const dispatch = useDispatch();
    const [price,setPrice] = useState(50000);
    const { products , currentPage , isLoading , selectedCategory } = useSelector(productSelector);

    useEffect(() => {
        setSelectedCategory('');
        dispatch(getInitialProductThunk());
    },[]);

    if(isLoading){
        return(
            <div className="w-full h-[93vh] flex justify-center items-center text-xl font-bold">
                <Loader />
            </div>
        )
    }

    return(
        <>
            <Container>
                <Filter price={price} setPrice={setPrice} />
                <ShowProducts products={products} price={price} selectedCategory={selectedCategory} />
                <Pagination pageNumber={currentPage} setPageNumber={setCurrentPage} />
            </Container>
        </>
    )
}

export default MainContainer;