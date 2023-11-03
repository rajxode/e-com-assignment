import ProductCard from "./ProductCard";

const ShowProducts = (props) => {

    const { price , products , selectedCategory } = props;

    return(
        <>
            <div className="w-[80%] h-auto flex flex-col flex-wrap bg-[#ffffff]">
                <div className="w-full h-[45px] text-center text-2xl font-bold">
                    {
                        true && selectedCategory
                    }
                </div>
                <div className="flex flex-wrap w-full justify-between">
                    {
                        
                        products.length > 0 
                        ?
                        products
                        .filter((item) => {
                            return price === 50000
                            ? item
                            :(item.price * 80) <= price})
                        .map((product,i) => <ProductCard key={i} product={product} />)
                        :
                        <h1 className="text-xl font-bold text-center w-full">
                            Nothing to Show
                        </h1>
                    }
                </div>
            </div>
        </>
    )
}


export default ShowProducts;