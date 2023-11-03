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
    @media (max-width:600px){
      justify-content:space-between;
    }
`;

// button inside the navbar
const NavButton = styled.button`
    &:hover{
      background-color:#6f9fff;
      border:1px solid lightgrey;
      border-radius:5px;
      padding:4px;
    }
    @
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
    min-width:150px;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:900;
    font-size:1.3rem;
`;


const SearchContainer = styled.div`
    width:40%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#f1f5ff;
    color:black;
    border-radius:5px;
    @media (max-width:1050px){
      width:30%;
    }
    @media (max-width:900px){
      display:none;
    }
`;


const NavBtnContainer = styled.div`
    width:30%;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0px 1%;
    @media (max-width:1250px){
      width:40%;
    }
    @media (max-width:900px){
      display:none;
    }
`;

const HiddenMenuIcon = styled.div`
    display:none;
    height:auto;
    margin-right:5px;
    cursor:pointer;
    width:30px;
    padding:0px 5px;
    font-weight:800;
    font-size:1.3rem;
    &:hover{
      background-color:#6f9fff;
      border:1px solid lightgrey;
      border-radius:5px;
    }
    @media (max-width:900px){
      display:block;
      input{
        display:none;
      }
    }
`;

const HiddenMenu = styled.div`
    display:none;
    height:auto;
    width:100%;
    padding:4px;
    background-color:#E0F4FF;
    @media (max-width:900px){
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      > div{
        padding:2px 4px;
        width:100%;
        height:30px;
        cursor:pointer;
        background-color:transparent;
        &:hover{
          background-color:#2874f0;
          color:black;
        }
      }

    }
`;


// render the navbar
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // for search text
  const [ search, setSearch ] = useState('');
  const [showMenu,setShowMenu] = useState(false);

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
      <div className="w-full h-auto flex flex-col shadow-md">
      <Nav>
        <BrandContainer>
          <i className="cursor-pointer" onClick={handleHomeClick}>ProductCart</i>
        </BrandContainer>
        <SearchContainer className="text-lg">
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
        </SearchContainer>
        <NavBtnContainer className=" text-xl">
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
        </NavBtnContainer>
        <HiddenMenuIcon onClick={() => setShowMenu(!showMenu) }>
          <i class="fa-solid fa-bars"></i>
        </HiddenMenuIcon>
      </Nav>
      {
        showMenu
        ?
        <HiddenMenu>
          <div style={{backgroundColor:'white'}} className="w-full px-2">
            <input
              type="text"
              placeholder="Search. . ."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
              className="w-[90%] h-[29px] px-2 bg-transparent focus:outline-none"
            />
            <button className="w-[10%]" onClick={handleClick}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div>
            <span className="mr-1">
              <i class="fa-solid fa-store"></i>
            </span>
            Become a Seller
          </div>

          <div>
            <span className="mr-1">
              <i class="fa-solid fa-user"></i>
            </span>
            SignIn
            </div>

          <div>
            <span className="mr-1">
              <i class="fa-solid fa-cart-shopping"></i>
            </span>
            Cart
          </div>
        </HiddenMenu>
        :
        null
      }
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
