import './Product.css';
import {useState} from 'react';
function Product({ update, setTitle, setCount, title, author, excerpt }){
 
    
    const [books, setBook] = useState([]);
    function onBtnClick(e){
        setCount(prevCounter => prevCounter + 1);
        const titleBook = [title];
        
        setTitle(title);
        // update(title);
        setBook(books => {
            return [...books,titleBook]
        });
        console.log('this', e.target);
    }
    return(
        <article className='card'>
            <header> 
                <h2>{ title }</h2>
                <h4>{ author }</h4>   
            </header>
            <p>{ excerpt }</p>
            <button onClick = {onBtnClick} className='btn'>Add to cart</button>
        </article>
    )
}

export default Product;