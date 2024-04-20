import React from 'react';
import {headerLogo} from '../assets/images/index.js';
import {hamburger} from '../assets/icons/index.js';
import { navLinks } from '../constants/index.js';

const Nav = () => {
    return (
        <header className='padding-x py-8 absolute z-10 w-full' >
            <nav className='flex justify-between items-center max-container' >
                <a href="/"><img src={headerLogo} alt="Nike Logo" width={130} height={29} className='m-0 w-[129px] h-[29px]'/></a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item)=>{
                        return (<li key={item.label}>
                            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                                {item.label}
                            </a>
                        </li>)
                    })}
                </ul>
                <div>
                    <img src={hamburger} width={25} height={25} alt="hamburger" className='hidden max-lg:block' />

                </div>
            </nav>
        </header>    
    );
};

export default Nav;