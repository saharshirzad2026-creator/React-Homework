// import { Connect } from "vite";
// import { Route, Routes } from "react-router-dom";
// import About from "./About";
// import Hero from "./Hero";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Testing from "./Test";
// import Services from "./Services";
// import Contact from "./Contact";

const App = ()=>{
  const navigate = useNavigate();
  function handleClick(){
    navigate('/teachers');
  }
  return(
    <>
      <Navbar/>
      <h1 className="text-3xl font-bold text-center text-red-700 my-3">Hello and good afternoon everyone This is the home page</h1>
       {/* <Hero text="Hello and good afternoon everyone"/> */}
       <button className="bg-red-700 text-2xl font-bold mx-96 p-3 rounded-md text-white my-5 hover:cursor-pointer" onClick={handleClick}>Go to Teachers page</button>
       <Testing/>
    </>
  )
}
export default App;