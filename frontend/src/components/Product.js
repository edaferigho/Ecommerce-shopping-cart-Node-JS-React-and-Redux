import './Product.css'
import {Link} from 'react-router-dom'
function Product() {
    return (
        <div className="product">
            <img src="/macbook-pro-15.jpg" alt="" />
            <div className="product_info">
                <p>Product 1</p>
                <p className="product_description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed necessitatibus fuga dolore laudantium, voluptatum aut voluptate, blanditiis quo iste neque incidunt doloremque repellat optio suscipit delectus, pariatur accusamus sequi quisquam.
                </p>
                <p className="info__price">$3465.90</p>
                <Link to={`/product/${1232}`} className="info__button">
                    View
                </Link>
            </div>
        </div>
    )
}

export default Product
