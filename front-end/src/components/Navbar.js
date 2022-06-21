import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import * as GoIcons from 'react-icons/go';
import * as MdIcons from 'react-icons/md';
import { IconContext } from 'react-icons';

function NavBar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{color:'#fff'}}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <GoIcons.GoThreeBars onClick={showSidebar}/>
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <MdIcons.MdClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar