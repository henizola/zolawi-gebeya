import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/1531643.svg'
import './header.styles.scss'
const Header = ( ) =>(
    <div className='outer-container'>
        <Link to='/' classNAme='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options-container'>
            <Link to='/shop' className='option'>
                    SHOP
            </Link>
            <Link to='/shop' className='option'>
                CONTACT
            </Link>
        </div>

    </div>
);

export default Header;