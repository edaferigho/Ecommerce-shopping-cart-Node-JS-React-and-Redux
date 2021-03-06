import CartItem from "../components/CartItem"
import './CartScreen.css'

function CartScreen() {
    return (
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="cartscreen__right">
        <div className="cartscreen__info">
            <p>Subtotal (0)items</p>
            <p>$499.98</p>
          </div>
          <div>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      </div>
      
    )
}

export default CartScreen
