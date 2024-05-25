import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Home/Navbar";
import Mainpage from "./Components/Home/Mainpage";
import Footer from "./Components/Home/Footer";
import Cameras from "./Components/Camera/Cameras";
import Lenses from "./Components/Lens/Lenses";
import ProductDescription from "./Components/Templates/ProductDescription";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import Payment from "./Components/Templates/Payment";
import Confirmation from "./Components/Confirmation/Confirmation";
import About from "./Components/About/About";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Mainpage/>}></Route>
        <Route path="/cameras" element = {<Cameras/>}></Route>
        <Route path="/lenses" element = {<Lenses/>}></Route>
        <Route path="/product" element = {<ProductDescription/>}></Route>
        <Route path="/login" element = {<Login/>}></Route>
        <Route path="/signup" element = {<Signup/>}></Route>
        <Route path="/payment" element = {<Payment/>}></Route>
        <Route path="/confirmation" element = {<Confirmation/>}></Route>
        <Route path="/about" element = {<About/>}></Route>
      </Routes> 
      <Footer/>
    </div>
  );
}

export default App;
