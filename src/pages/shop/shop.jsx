import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from './product'
export const Shop = () => {
    //shop shoptitle products
    return (
        <div className=''>
            <div className='w-full h-auto grid grid-cols-3 overflow-hidden '>
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>
        </div>
    )
}
