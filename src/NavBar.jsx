import React from 'react'
import {Link} from "react-router-dom"

export const NavBar = () => {
return (
<div>
    <nav>
    <Link to="/home">Home</Link>
    <Link to="/about" >About</Link>
    <Link to="/faqs" >Faqs</Link>
    </nav>
</div>
)
}
