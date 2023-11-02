

const Pagination = (props) => {

    const { pageNumber, setPageNumber} = props;

    return(
        <div className="w-full h-auto flex justify-between px-2">
            <button className="h-[40px] w-[40px] rounded-full bg-slate-400 text-white"
                    onClick={() => setPageNumber( pageNumber - 1 )}
                    disabled={ pageNumber == 0 }
                >
                Prev    
            </button>
            <button className="h-[40px] w-[40px] rounded-full bg-slate-400 text-white"
                    onClick={() => setPageNumber( pageNumber + 1 )}
                >
                Next
            </button>
        </div>
    )
}

export default Pagination;