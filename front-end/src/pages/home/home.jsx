import React from 'react';
import './home.css';

export default function Home() {
    const User = 'Gustavo';

    function LayoutTopo() {
        const LarguraMenuTopo = document.getElementById('menuTopo').clientWidth;
        const LarguraMenuIcon = document.getElementById('menuIcon').clientWidth;
        const LarguraMenuUser = document.getElementById('menuUser').clientWidth;
        const LogoMenu = document.getElementById('menuLogo');

        const LarguraMenuLogo = LarguraMenuTopo - (LarguraMenuIcon + LarguraMenuUser);
        LogoMenu.style.width = LarguraMenuLogo;

    }
    React.useEffect(() => {
        LayoutTopo();
    }, []);
    return (
        <div className='MenuTopo' id='menuTopo'>
            <div className='MenuIcon' id='menuIcon'>
                <label>&#9776;</label>
            </div>
            <div className='Logo' id='menuLogo'>
                <h1>Personal System</h1>
            </div>
            <div className='MenuUser' id='menuUser'>
                <label>Olá {User}</label>
            </div>
        </div>
    );
}