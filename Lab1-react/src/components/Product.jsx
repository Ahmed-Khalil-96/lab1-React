import React, { useState } from "react";

function Product({ product }) {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    const addToCart = () => {
        console.log(`Added ${quantity} ${product.title} to cart!`);
    };

    return (  
        <div className="card col-4">
            <img className="card-img-top" src={product.thumbnail} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <div className="row">
                    <p className="badge badge-primary text-dark col-3">{product.category}</p>
                    <p className="col-6">brand: {product.brand}</p>
                    <p className="col-3">{product.price}$</p>
                </div>

                <div className="row">
                    <p className="col-6">Rating : {product.rating}</p>
                    <p className="col-6">{product.stock > 0 ? "In stock" : "Out of stock"}</p>
                </div>
                {product.discount && (
                    <p className="text-success">Special Offer: {product.discount}% off!</p>
                )}
                <div className="form-group">
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" className="form-control" id="quantity" value={quantity} onChange={handleQuantityChange} />
                </div>
                <button onClick={addToCart} className="btn btn-primary">Add to Cart</button>
            </div>
      </div>
    );
}

export default Product;
