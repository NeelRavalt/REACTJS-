import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Products() {
  return (
    <>
    <div>
        <h2>This is all products</h2>
    </div>
    <nav>
        <Link to = "Shirts"> Shirts </Link>
        <Link to = "Jeans"> Jeans </Link>
    </nav>

    <Outlet/> 
    {/* in the page multiple path (link) ne access karva outlet no use thay */}
    </>
  )
}
