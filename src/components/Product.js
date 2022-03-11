import './Product.css';
import {useState} from 'react';
function Product({ updateCart,book }){
 
    
    
    function onBtnClick(e){
        console.log("test");
        // setCount(prevCounter => prevCounter + 1);
        // // const titleBook = [title];
        // console.log(e.this.title);
        // // setTitle(books);
        // // // update(title);
        // // setBook(books => {
        // //     return [...books,title]
        // // });
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