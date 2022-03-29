import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Login from "./Components/Login";
import ProductLists from "./Components/ProductLists";
import Signup from "./Components/Signup";
import WishList from "./Components/WishList";

function App() {
  return (
    <div className="App">
     <h1>Hello ecom</h1>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="login" element={<Login/>}/>
       <Route path="signup" element={<Signup/>}/>
       <Route path="product-lists" element={<ProductLists/>}/>
       <Route path="wishlist" element={<WishList/>}/>
       <Route path="cart" element={<Cart/>}/>
     </Routes>
     
     
     
     
     
     
    </div>
  );
}

export default App;
