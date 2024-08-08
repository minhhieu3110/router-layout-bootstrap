import './App.css';
import {Route, Routes} from "react-router";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Detail from "./components/Detail";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    return (
        <Routes>
            <Route path='' element={<Home/>}>
                <Route path='cart' element={<Cart/>}/>
                <Route path='detail' element={<Detail/>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    );
}

export default App;
