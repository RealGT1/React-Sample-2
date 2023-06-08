import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bag, ShoppingCart } from 'phosphor-react'

export const Navbar = () => {
    const location = useLocation();
    return (
        <div className='w-full h-16 bg-slate-900 flex items-center justify-between'>
            <div className='text-yellow-400 pl-6 text-3xl  flex items-center'>
                <Link to="/" className='mr-3'>Sony Center</Link>
                <Link to="/">{location.pathname === '/cart' && <div className=' text-white'><Bag /></div>}</Link>
            </div>
            <div className='mr-12 flex items-center gap-2 text-white font-semibold ' >
                <Link to="/">Shop</Link>
                <Link to="/cart" className=''><ShoppingCart size={28} /></Link>
            </div>
        </div>
    )
}
