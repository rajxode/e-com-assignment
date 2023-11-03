import { useDispatch, useSelector } from "react-redux";
import { getPageProductThunk, productSelector, setCurrentPage } from "../Redux/Reducers/productReducer";
import styled from "styled-components";

const Container = styled.div`
    width:100%;
    height:auto;
    display:flex;
    justify-content:space-between;
    padding:0 8px;
`;

const NavButton = styled.button`
    height:40px;
    width:40px;
    border-radius:50%;
    background-color:grey;
    color:white;
`;


const Pagination = () => {
    
    const dispatch = useDispatch();
    const { currentPage } = useSelector(productSelector);

    const changePage = async(num) => {
        await dispatch(setCurrentPage(num));
        dispatch(getPageProductThunk());
    }

    return(
        <>
        <Container>
            <NavButton
                    onClick={(e) => changePage(-1)}
                    disabled={ currentPage == 0 }
                >
                Prev    
            </NavButton>
            <NavButton
                    onClick={(e) => changePage(1)}
                >
                Next
            </NavButton>
        </Container>
    </>
    )
}

export default Pagination;