
import styled from "styled-components"
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";

const Home = styled.div`
  width:100%;
  min-height:100vh;
  margin:0px;
  padding:0px;
`;


function App() {
  return (
    <Home className="bg-[#f1f2f4]">
      <Navbar />
      <MainContainer />
    </Home>
  )
}

export default App
