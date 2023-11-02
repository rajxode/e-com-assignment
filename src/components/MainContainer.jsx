
import Filter from "./Filter";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getInitialProductThunk, productSelector, setCurrentPage } from "../Redux/Reducers/productReducer";
import { useEffect } from "react";
import Loader from './Spinner';

const MainContainer = () => {

    const dispatch = useDispatch();
    const { products , currentPage , isLoading } = useSelector(productSelector);

    useEffect(() => {
        dispatch(getInitialProductThunk());
    },[])

    if(isLoading){
        return(
            <div className="w-full h-[93vh] flex justify-center items-center text-xl font-bold">
                <Loader />
            </div>
        )
    }

    return(
        <>
            <div className="w-full h-full px-[1%] py-2 flex flex-wrap justify-between ">
                <Filter />
                <div className="w-[80%] h-auto flex flex-wrap bg-[#ffffff] justify-between">
                    {
                        products.map((product,i) => <ProductCard key={i} product={product} />)
                    }
                </div>
                <Pagination pageNumber={currentPage} setPageNumber={setCurrentPage} />
            </div>
        </>
    )
}

export default MainContainer;