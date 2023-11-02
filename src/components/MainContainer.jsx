import { useState } from "react";
import Filter from "./Filter";
import { useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const MainContainer = () => {

    const [products,setProducts] = useState([]);
    const [pageNumber,setPageNumber] = useState(0);

    useEffect(() => {
        async function getData(){
            const response = await axios.get('https://dummyjson.com/products?limit=12');
            setProducts(response.data.products);
        }

        getData();
    },[]);

    useEffect(() => {
        if(pageNumber >= 0){
            async function getData(){
                const response = await axios.get(`https://dummyjson.com/products?limit=12&skip=${pageNumber*12}`);
                setProducts(response.data.products);
            }
            getData();
        }
    },[pageNumber]);

    return(
        <>
            <div className="w-full h-full px-[1%] py-2 flex flex-wrap justify-between ">
                <Filter />
                <div className="w-[80%] h-auto flex flex-wrap bg-[#ffffff] justify-between">
                    {
                        products.map((product,i) => <ProductCard key={i} product={product} />)
                    }
                </div>
                <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
            </div>
        </>
    )
}

export default MainContainer;