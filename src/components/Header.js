import './Header.css';
import logo from '../img/logo.png';
import Cart from './Cart';
import {useState} from 'react';

function Header({ cart }){
    
    console.log(selectedTitle);
    return(
        <header>
            <div className='headerContainer'>
                <a herf="#" className='logo'>
                    <img src={logo}/>
                </a>
                <Cart cart = {cart} />
            </div>
        </header>
    )
}
export default Header;

