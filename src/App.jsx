
import styled from "styled-components"
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import SingleProduct from "./components/SingleProduct";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { useState } from "react";

const Home = styled.div`
  width:100%;
  min-height:100vh;
  margin:0px;
  padding:0px;
`;


function App() {

  const [search,setSearch] = useState('');

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Navbar search={search} setSearch={setSearch} />}>
          <Route index element={<MainContainer search={search} />} />
          <Route path="single-product" element={<SingleProduct />} />
        </Route>
    )
  )

  return (
    <Home>
      <RouterProvider router={router} />
    </Home>
  )
}

export default App
