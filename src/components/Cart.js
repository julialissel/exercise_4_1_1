import './Cart.css';
import {useState} from 'react';
function Cart({cart}){
    const [visible, setVisible] = useState(false);
    let newCart = [];
    let noBooks = new Set(cart);
    noBooks.forEach(book => {
        newCart.push({ title: book.title, amount: cart.filter(book => book.title === book.title)})
    })
    
    return(
        <div className="cart">
            <h3>Cart</h3>
            <span onClick={() => setVisible(!visible)} className='numberOfItems'>{newCart.length}</span>
            {visible && <div className='shoppingCart'>
                <div className='cartHeader'>
                    <h2>Cart</h2>
                </div>
                <ul className='cartList'>
                    {newCart.map((book,index) => (
                        <li className="cartItem" key={index}>
                            <div className='cartItemContainer'>
                                <h3>{book.title}</h3>
                                <button type="button" className="close" >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>}
            
        </div>
        
    )
}

export default Cart;

{/* <h3>Varukorg</h3>
                {/* {sendTitile.map((book) => {
                    return <li>{book.title}</li>
                })} */}
                // <ul>
                //     <li>
                //         {sendTitile}
                //     </li>
                // </ul> */}