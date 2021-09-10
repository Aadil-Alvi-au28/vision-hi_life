import React from 'react'

function ProductItem({ image, name, discription }) {
    return (
        <div className="productItem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1> {name} </h1>
            <p> {discription}</p>
        </div>
    );
}

export default ProductItem
