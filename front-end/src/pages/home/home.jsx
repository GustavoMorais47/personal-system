import React from 'react';
import {Routes,Route,Link} from "react-router-dom";
import './home.css';
import Logo from '../../assets/LogoTopo.svg';

export default function Home() {
    const User = 'Gustavo';
    
    var WidthTela;
    var HeightTela;

    /*CRIA A LOGO DO CABEÇALHO*/
    function ObterLargura() {
        var LarguraMenuTopo = document.getElementById('menuTopo').clientWidth;
        var LarguraMenuIcon = document.getElementById('menuIcon').clientWidth;
        var LarguraMenuUser = document.getElementById('menuUser').clientWidth;

        CalcularLarguraLogo(LarguraMenuTopo, LarguraMenuIcon, LarguraMenuUser);
    }
    function CalcularLarguraLogo(largura1, largura2, largura3) {
        var LarguraMenuLogo = largura1 - (largura2 + largura3);
        CriaDivLogo(LarguraMenuLogo);
    }
    function CriaDivLogo(largura) {
        var DivPai = document.getElementById('menuTopo').innerHTML;
        var ClassDivmenuLogo = document.getElementsByClassName('MenuLogo');
        DivPai = '<div class="MenuIcon" id="menuIcon"><label>☰</label></div>' + '<a href="/home"><div class="MenuLogo" id="menuLogo" style="height: 30px;"><img class="Logo" src="' + Logo + '"></div></a>' + '<div class="MenuUser" id="menuUser"><label>Olá Gustavo</label></div>';
        ClassDivmenuLogo.clientWidth = largura + 'px';
        document.getElementById('menuTopo').innerHTML = DivPai;
    }
    /*REDIMENCIONA A SECTION*/
    function AjustaSection(){
        var Section = document.getElementById('menu');
        Section.style.height = HeightTela + 'px';
    }
    /*FAZ O CALCULO DA TELA*/
    function CalculaTela(){
        WidthTela = window.screen.width;
        HeightTela = window.screen.height;
    }

    function Btn(){
        console.log('sdf');
    }

    React.useEffect(() => {
        CalculaTela();
        AjustaSection();
        ObterLargura();
    }, []);
    return (
        <section className='section-01' id='menu'>
            <div className='MenuLateral' id='menuLateral'>
                <ul>
                    <Link to='/home'><li>Home</li></Link>
                    <Link to='/home'><li>Módulos</li></Link>
                    <Link to='/home'><li>Customizar</li></Link>
                    <Link to='/home'><li>Configuração</li></Link>
                    <Link to='/home'><li>Sair</li></Link>
                </ul>
            </div>
            <div className='MenuTopo' id='menuTopo'>
                <div className='MenuIcon' id='menuIcon' onClick={Btn()}>
                    <label id='BtnMenu'>&#9776;</label>
                </div>
                <div className='MenuUser' id='menuUser'>
                    <label>Olá {User}</label>
                </div>
            </div>
        </section>
    );
}