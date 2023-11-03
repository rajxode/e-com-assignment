import styled from "styled-components";
import ProductCard from "./ProductCard";

const Container = styled.div`
    width:80%;
    height:auto;
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    background-color:#ffffff;

    @media (max-width:1200px){
        width:70%;
    }

    @media (max-width:680px){
        width:100%;
    }
`;

const ShowProducts = (props) => {

    const { price , products , selectedCategory } = props;

    return(
        <>
            <Container>
                <div className="w-full h-[45px] text-center text-2xl font-bold">
                    {
                        true && selectedCategory
                    }
                </div>
                <div className="flex flex-wrap w-full justify-center md:justify-between">
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
            </Container>
        </>
    )
}


export default ShowProducts;