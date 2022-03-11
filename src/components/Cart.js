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
                <h3>Varukorg</h3>
                {/* {sendTitile.map((book) => {
                    return <li>{book.title}</li>
                })} */}
                <ul>
                    <li>
                        {sendTitile}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Cart;