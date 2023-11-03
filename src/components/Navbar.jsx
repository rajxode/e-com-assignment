import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getInitialProductThunk, getSearchProductThunk, setSelectedCategory } from "../Redux/Reducers/productReducer";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// the navbar
const Nav = styled.div`
    width:100%;
    height:55px;
    display:flex;
    justify-content:space-around;
    align-items:center;
    color:white;
    background-color:#2874f0;
`;

// button inside the navbar
const NavButton = styled.button`
    &:hover{
      background-color:#6f9fff;
      border:1px solid lightgrey;
      border-radius:5px;
      padding:4px;
    }

`;

// button for search
const SearchButton = styled.button`
    width:35px;
    padding:0px 4px;
    height:30px;
    background-color:transparent;
    text-align:center;
    border-left:1px solid lightgrey;
    &:hover{
      background-color:#b5cbf7;
      color:white;
      border-radius:2px;
    }
`;

// brand container
const BrandContainer= styled.div`
    width:10%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:900;
    font-size:1.3rem;
`;


// render the navbar
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // for search text
  const [ search, setSearch ] = useState('');

  // redirect to the homepage
  const handleHomeClick = (e) => {
    e.preventDefault();
    // get the initial list of products
    dispatch(getInitialProductThunk());
    dispatch(setSelectedCategory(''));
    navigate('/');
  }

  // handle search button click 
  const handleClick = (e) => {
    e.preventDefault();
    if(!search){
      toast.error('Nothing to search !!');
      dispatch(getInitialProductThunk());
      return;
    }
    // get product based on search text
    dispatch(getSearchProductThunk({name:search}));
    setSearch('');
  }

  return (
    <>
      <Nav className="shadow-md">
        <BrandContainer>
          <i className="cursor-pointer" onClick={handleHomeClick}>ProductCart</i>
        </BrandContainer>
        <div className="w-2/5 h-fit flex justify-center items-center bg-[#f1f5ff] text-black text-lg rounded">
          <input
            type="text"
            placeholder="Search. . ."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
            className="w-full h-[29px] px-2 bg-transparent focus:outline-none"
          />
          <SearchButton onClick={handleClick}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </SearchButton>
        </div>
        <div className="w-[30%] h-full flex justify-between items-center px-[1%] text-xl">
          <NavButton>
            <span className="mr-1">
              <i class="fa-solid fa-store"></i>
            </span>
            Become a Seller
          </NavButton>

          <NavButton>
            <span className="mr-1">
              <i class="fa-solid fa-user"></i>
            </span>
            SignIn
            </NavButton>

          <NavButton>
            <span className="mr-1">
              <i class="fa-solid fa-cart-shopping"></i>
            </span>
            Cart
          </NavButton>

          <NavButton>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </NavButton>
        </div>
        </Nav>
      <Outlet />
    </>
  );
};

export default Navbar;
