import './Header.css';
import logo from '../img/logo.png';
import Cart from './Cart';
import {useState} from 'react';

function Header({ selectedTitle, selectedCount }){
    
    
    return(
        <header>
            <div className='headerContainer'>
                <a herf="#" className='logo'>
                    <img src={logo}/>
                </a>
                <Cart sendCount = {selectedCount} sendTitile = {selectedTitle}/>
            </div>
        </header>
    )
}
export default Header;

