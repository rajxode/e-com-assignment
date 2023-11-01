import { useState } from "react";
import Filter from "./Filter";
import { useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const MainContainer = () => {

    const [products,setProducts] = useState([]);

    useEffect(() => {
        async function getData(){
            const response = await axios.get('https://dummyjson.com/products');
            setProducts(response.data.products);
        }

        getData();
    },[]);

    return(
        <>
            <div className="w-full h-full px-[2%] py-2 flex flex-col flex-wrap justify-between ">
                {/* <Filter /> */}
                <div className="w-full h-auto flex flex-wrap mt-2 bg-[#ffffff] justify-between">
                {
                    products.map((product,i) => <ProductCard key={i} product={product} />)
                }
                </div>
            </div>
        </>
    )
}

export default MainContainer;