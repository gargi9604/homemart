import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assests/logo.png';
import cart_icon from '../Assests/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {

    const [menu ,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>HomeMart</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("jewellery")}}><Link style={{textDecoration:'none'}} to='/jewellery'>Jewellery</Link>{menu==="jewellery"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("crafts")}}><Link style={{textDecoration:'none'}} to='/crafts'>Crafts</Link>{menu==="crafts"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("decoratives")}}><Link style={{textDecoration:'none'}} to='decoratives'>Decoratives</Link>{menu==="decoratives"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("clothes")}}><Link style={{textDecoration:'none'}} to='clothes'>Clothes</Link>{menu==="clothes"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
               <Link to='/becomeseller'> <button>Become a Seller</button></Link>
               <Link to='/login'> <button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link> 
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navbar;