import React from 'react'
import '../styles/OurProducts.css'
import ProductItem from '../Component/ProductItem'
import { ProductList } from '../Component/ProductList'
function OurProducts() {
    return (
        <div className='product'>
            <h1 className='productTitle'>Our Product</h1>
            <div className="productList">
                {ProductList.map((productItem, key) => {
                    return (
                        <ProductItem
                            key={key}
                            image={productItem.image}
                            name={productItem.name}
                            price={productItem.discription}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default OurProducts
