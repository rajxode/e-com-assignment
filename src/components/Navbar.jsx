import styled from "styled-components";


// const Nav = styled.div`
//     width:94%;
//     height:50px;
//     padding:4px 3%;
//     background-color:cyan;
//     display:flex;
//     justify-content:space-around;
//     align-items:center;
// `;

// const SearchBar = styled.input`
//     width:80%;
//     border:none;

// `


const Navbar = () => {
    return(
        <>
            <nav className="w-full h-[55px] bg-[#ffffff] flex justify-around items-center shadow-md">
                
                <div className="w-[10%] h-full flex justify-center items-center text-2xl font-bold text-blue-600">
                    <i>
                        ProductCart
                    </i>
                </div>
                <div className="w-2/5 h-fit flex justify-center items-center bg-[#f1f5ff] text-black text-xl p-1 rounded">
                    <span className="w-[30px] px-1 h-[30px] bg-transparent text-slate-400 text-center">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input type="text" placeholder="Search . . ." className="w-full h-[29px] px-2 bg-transparent focus:outline-none"/>
                </div>
                <div className="w-[30%] h-full flex justify-between items-center px-[1%] text-xl">

                    <button className="hover:bg-[#f1f2f4] hover:border rounded p-1">
                        <span className="mr-1">
                        <i class="fa-solid fa-store"></i>
                        </span>
                        Become a Seller
                    </button>

                    <button className="hover:bg-[#f1f2f4] hover:border rounded p-1">
                        <span className="mr-1">
                            <i class="fa-solid fa-user"></i>
                        </span>
                        SignIn
                    </button>

                    <button className="hover:bg-[#f1f2f4] hover:border rounded p-1">
                        <span className="mr-1">
                        <i class="fa-solid fa-cart-shopping"></i>
                        </span>
                        Cart
                    </button>

                    <button className="hover:bg-[#f1f2f4] hover:border rounded py-1 px-3">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;