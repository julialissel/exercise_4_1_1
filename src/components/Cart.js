import './Cart.css';

function Cart({sendCount,sendTitile}){
    // console.log(sendTitile);
    // {todos.map((todo) => {
    //     return console.log();
    //   })}
   
    return(
        <div className="cart">
            <h3>Cart</h3>
            <span className='numberOfItems'>{sendCount}</span>
            <div className='shoppingCart'>
                <div className='cartHeader'>
                    <h2>Cart</h2>
                </div>
                <ul className='cartList'>
                    <li className="cartItem">
                        <div className='cartItemContainer'>
                            <h3>Book title 1</h3>
                            <button type="button" className="close" >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </li>
                    <li className="cartItem">
                        <div className='cartItemContainer'>
                            <h3>Book title 2</h3>
                            <button type="button" className="close" >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </li>
                    <li className="cartItem">
                        <div className='cartItemContainer'>
                            <h3>Book title 3</h3>
                            <button type="button" className="close" >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
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