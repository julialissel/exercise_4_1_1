import './Product.css';
import {useState} from 'react';
function Product({ updateCart,book }){
    function onBtnClick(e){
        updateCart(book);
    }
    return(
        <article className='card'>
            <header> 
                <h2>{ book.title }</h2>
                <h4>{ book.author }</h4>   
            </header>
            <p>{ book.excerpt }</p>
            <button onClick = {onBtnClick} className='btn'>Add to cart</button>
        </article>
    )
}

export default Product;