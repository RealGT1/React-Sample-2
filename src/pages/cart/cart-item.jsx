import React,{useContext} from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const {cartItems,addToCart, removeFromCart,updateCartItemsCount}=useContext(ShopContext)
    return (
        <div className='w-[700px] h-[250px] flex items-center shadow-[0px_3px_15px_rgba(0,0,0,0.2)] rounded-3xl m-3 p-2'>
            <img src={productImage} className='w-[200px]' />
            <div className='w-full text-xl'>
                <p className='font-semibold'>{productName}</p>
                <p className='text-red-700 text-[18px] font-semibold'>&#8377; {price}</p>
                <div class="flex items-center mt-2">
                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l text-xs" onClick={()=>removeFromCart(id)}>
                        -
                    </button>
                    <input class="w-10 h-6 bg-gray-300 text-gray-800 font-bold text-center text-xs"  value={cartItems[id]} onChange={(e)=>updateCartItemsCount(Number(e.target.value),id)}/>
                        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r text-xs" onClick={()=>addToCart(id)}>
                            +
                        </button>
                </div>


            </div>
        </div>
    )
}
