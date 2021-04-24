import React from 'react'
import Product from './Product'
import productsData from './vschoolProducts'


export default function App() {
 const productComponents = productsData.map((item) => {
        return(
            <Product key={item.id} product={item} />
        )
    })
    
    return (
        <div>
            {productComponents}
        </div>
    )
}
