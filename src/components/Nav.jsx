import React from 'react';
import {headerLogo} from '../assets/images/index.js';
import {hamburger} from '../assets/icons/index.js';
const Nav = () => {
    return (
        <header>
            <nav>
                <a href="/"><img src={headerLogo} alt="" /></a>
            </nav>
        </header>    
    );
};

export default Nav;