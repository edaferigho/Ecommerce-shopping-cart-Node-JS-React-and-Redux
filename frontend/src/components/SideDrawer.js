import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './SideDrawer.css';

function SideDrawer({show,clickevent}) {
    const sidedrawerClass = ["sidedrawer"]
    if (show) {
        sidedrawerClass.push("show")
    }
    return (
        <div className={sidedrawerClass.join(' ')}>
            <ul className="sidedrawer__list" onClick={clickevent}>
                <li>
                    <Link to='/cart'>
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="sidedrawer-cart-badge">5</span></span>
                    </Link>
                </li>
                 <li>
                    <Link to='/'>
                        Shopping
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideDrawer
