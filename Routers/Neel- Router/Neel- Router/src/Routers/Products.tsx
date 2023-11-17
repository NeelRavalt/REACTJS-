import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Products() {
  return (
    <>
    <div>
        <h2>This is all products</h2>
    </div>
    <nav>
        <Link to = "Shirts" className='m-3'> Shirts </Link> 
        <Link to = "Jeans"> Jeans </Link>
    </nav>

    <Outlet/>
    </>
  )
}
