// import { Connect } from "vite";
// import { Route, Routes } from "react-router-dom";
// import About from "./About";
// import Hero from "./Hero";
import Navbar from "./Navbar";
// import Services from "./Services";
// import Contact from "./Contact";

const App = ()=>{
  return(
    <>
      <Navbar/>
      <h1 className="text-3xl font-bold text-center text-red-700 my-3">Hello and good afternoon everyone This is the home page</h1>
       {/* <Hero text="Hello and good afternoon everyone"/> */}
    </>
  )
}
export default App;