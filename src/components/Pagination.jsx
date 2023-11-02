import { useDispatch, useSelector } from "react-redux";
import { getPageProductThunk, productSelector, setCurrentPage } from "../Redux/Reducers/productReducer";


const Pagination = (props) => {
    
    const dispatch = useDispatch();
    const { currentPage } = useSelector(productSelector);

    const changePage = async(num) => {
        await dispatch(setCurrentPage(num));
        dispatch(getPageProductThunk());
    }

    return(
        <div className="w-full h-auto flex justify-between px-2">
            <button className="h-[40px] w-[40px] rounded-full bg-slate-400 text-white"
                    onClick={(e) => changePage(-1)}
                    disabled={ currentPage == 0 }
                >
                Prev    
            </button>
            <button className="h-[40px] w-[40px] rounded-full bg-slate-400 text-white"
                    onClick={(e) => changePage(1)}
                >
                Next
            </button>
        </div>
    )
}

export default Pagination;