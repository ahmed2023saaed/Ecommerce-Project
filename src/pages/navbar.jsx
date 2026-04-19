import React from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'

import {useSelector} from 'react-redux'

export default function Navbar() {

    const count = useSelector((state) => state.counter.value);
  return (
    <>
        <div className='flex justify-around bg-gray-50 py-5 sticky top-0 left-0 z-10 shadow-2xl '>
            <div className="title">
                <Link className=' text-3xl text-blue-600 font-bold font-sans' to="/">Ecommerce </Link>
            </div>
            <div className="middle w-1/4 flex justify-around">
            <Link className=' text-xl' to="/">Home</Link>
            <Link className=' text-xl' to="/about">About</Link>
            <Link className=' text-xl' to="/shop">Shop</Link>
            <Link className=' text-xl' to="/contact">Contact</Link>
            </div>
            <div className="cart-icon">
                <Link className='text-2xl' to="/cart"><i className= " fa-solid fa-cart-shopping"></i>
                <span className='badge' >{count}</span>
                </Link>
            </div>
        </div>
    </>
  )
}
