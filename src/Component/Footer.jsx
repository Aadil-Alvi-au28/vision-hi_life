import React from 'react'
import { Instagram, Facebook, Twitter } from '@material-ui/icons'
import '../styles/Footer.css'
function Footer() {
    return (
        <div className='footer'>

            <div className='socialMedia'>

                <a href="https://www.instagram.com/"><Instagram className='instagram' /></a>
                <Facebook className='facebook' />
                <Twitter className='twitter' />
                <p>&copy; 2021  Majid-AlMajid. All rights reserved.</p>
            </div>



        </div>
    )
}

export default Footer
