import './ProductScreen.css';


function ProductScreen() {
    return (
        <div class="productcreen">
            <div className="productscreen__left">
                <div className="left__image"><img   src="/macbook-pro-15.jpg" alt="" /></div>
                <div className="left__info">
                    <p className="left__name">Macbook Pro-15</p>
                    <p>Price:$344.56</p>
                    <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, odit beatae ipsam adipisci nihil tempora incidunt neque distinctio autem impedit fugiat! Culpa quis aut quos officiis quaerat! Repellendus, itaque quisquam.</p>
                </div>
            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p>
                        Price: <span>$345.67</span>
                    </p>
                    <p>Status: <span>In Stock</span> </p>
                    <p>
                        Qty:
                        <select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                        </select>
                    </p>
                    <p>
                        <button type='button'>add to cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
