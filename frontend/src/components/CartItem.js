import './CartItem.css'
import {Link} from 'react-router-dom'

function CartItem() {
    return (
        <div className = "cartitem">
            <div className="cartitem__image">
                <img src="/macbook-pro-15.jpg" alt="" />
                <Link to={`/product/${111}`} className="cartitem_name">
                    <p>Macbook Pro</p>
                </Link></div>
            <p className="cartitem_price">$499.89</p>
            <select >
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
            </select>
            <button className="cartitem_deleteitem">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default CartItem
