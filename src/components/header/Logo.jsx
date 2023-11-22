import React from 'react'
import { Link } from 'react-router-dom'
import { SiTravisci } from 'react-icons/si'

const Logo = ({ toggleMenu }) => {
    return (
        <h1 className='header__logo'>
            <Link to='/' onClick={toggleMenu}>
                <em><SiTravisci /></em>
                <span>travel<br />youtube</span>
            </Link>
        </h1>
    )
}

export default Logo