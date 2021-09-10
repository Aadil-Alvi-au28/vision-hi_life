import React, { useState } from 'react'
import Logo from '../assets/Vision Logo.png'
import { Link, } from 'react-router-dom'
import '../styles/Navbar.css'
import ReorderIcon from '@material-ui/icons/Reorder';
function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? 'open' : 'close'}> <img src={Logo} alt="Logo" />
                <p className='brandName'>MOHAMMED AL MAJED FACTORY</p>
                <div className='hiddenLinks'><Link to="/">Home</Link>
                    <Link to="/ourProducts">Our-Products</Link>
                    <Link to="/aboutUs">About Us</Link>
                    <Link to="/contactUs" varia>Contact Us</Link></div>
            </div>

            <div className="rightSide">
                <Link to="/">Home</Link>
                <Link to="/ourProducts">Our-Products</Link>
                <Link to="/aboutUs">About Us</Link>
                <Link to="/contactUs">Contact Us</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}
export default Navbar






