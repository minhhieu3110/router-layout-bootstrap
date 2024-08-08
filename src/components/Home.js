import '../Style/Home.css'
import Carousel from "./Carousel";
import ListProduct from "./List-Product";
import {Link, Outlet, useLocation} from "react-router-dom";

export default function Home(){
    const showHome = useLocation().pathname === '/'
    return(
        <div className='container text-center'>
            <div className="row header">
                <div className="col-12 header">
                    <ul>
                        <li><Link to='/'>Home</Link></li> |
                        <li><Link to='cart'>Cart</Link></li> |
                        <li><Link to='detail'>Detail Product</Link></li> |
                        <li><Link to='/login'>Logout</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row logo-banner">
                <div className="col-4">Logo col-4</div>
                <div className="col-8">Banner col-8</div>
            </div>
            <div className="row">
                <div className="col-12">NavBar</div>
            </div>
            <div className="row main">
                <div className="col-2">Left</div>
                <div className="col-7">
                    <Outlet/>
                    {showHome ?
                        <>
                            <Carousel/>
                            <ListProduct/>
                        </>
                    : null}
                </div>
                <div className="col-3">Right</div>
            </div>
        </div>
    )
}