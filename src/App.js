import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js"
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ProductLists from "./Pages/ProductLists/ProductLists";
import Signup from "./Pages/Signup/Signup";
import WishList from "./Pages/Wishlist/WishList";
import Cart from "./Pages/Cart/Cart";


function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/product-lists" element={<ProductLists/>}/>
       <Route path="/wishlist" element={<WishList/>}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/mockman" element={<Mockman/>}/>
     </Routes>
     
     
     
     
     
     
    </div>
  );
}

export default App;
