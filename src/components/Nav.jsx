import {headerLogo} from '../assets/images/';
import React from 'react';

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