import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './home.css';
import Logo from '../../assets/LogoTopo.svg';
import LogoMenu from '../../assets/Logo.svg';

export default function Home() {
    const User = 'Gustavo';
    var ButtonMenu;
    var ButtonModulo;

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
        DivPai = '<div class="MenuIcon" id="menuIcon"><label id="btnMenu">☰</label></div>' + '<a href="/inicio"><div class="MenuLogo" id="menuLogo" style="height: 30px;"><img class="Logo" src="' + Logo + '"></div></a>' + '<div class="MenuUser" id="menuUser"><label>Olá Gustavo</label></div>';
        ClassDivmenuLogo.clientWidth = largura + 'px';
        document.getElementById('menuTopo').innerHTML = DivPai;
        AtribuirFuncoes();
    }
    /*REDIMENCIONA A SECTION*/
    function AjustaSection() {
        var Section = document.getElementById('menu');
        Section.style.height = HeightTela + 'px';
    }
    /*FAZ O CALCULO DA TELA*/
    function CalculaTela() {
        WidthTela = window.screen.width;
        HeightTela = window.screen.height;
    }
    /*ATRIBUI FUNÇÕES*/
    function AtribuirFuncoes() {
        ButtonMenu = document.getElementById('menuIcon');
        ButtonMenu.onclick = VerificaMenu;

        ButtonModulo = document.getElementById('moduloCat');
        ButtonModulo.onclick = VerificaModulo;
    }
    /*FUNÇÕES*/
    function VerificaMenu() {
        const MenuLateral = document.getElementById('menuLateral');
        if (MenuLateral.classList.contains('MenuLateral-Ativa')) {
            MenuLateral.classList.remove('MenuLateral-Ativa');
        } else {
            MenuLateral.classList.add('MenuLateral-Ativa');
        }
    }
    function VerificaModulo() {
        const SubMenuModulo = document.getElementById('moduloSubCat');
        if (SubMenuModulo.classList.contains("SubCategoria-Ativa")) {
            SubMenuModulo.classList.remove('SubCategoria-Ativa');
        } else {
            SubMenuModulo.classList.add('SubCategoria-Ativa');
        }
    }
    React.useEffect(() => {
        CalculaTela();
        AjustaSection();
        ObterLargura();
    }, []);
    return (
        <section className='section-01' id='menu'>
            <div className='MenuLateral' id='menuLateral'>
                <div className='MenuLateralLogo'>
                    <img src={LogoMenu} className='Logo02' />
                </div>
                <ul>
                    <Link to='/inicio'><li className='Cat'>Início</li></Link>
                    <li className='Cat' id='moduloCat'>Módulo</li>
                    <ul className='SubCategoria' id='moduloSubCat'>
                        <Link to='#'><li className='Subcat'>Financeiro</li></Link>
                        <Link to='#'><li className='Subcat'>Otakupedia</li></Link>
                    </ul>
                    <Link to='#'><li className='Cat'>Customizar</li></Link>
                    <Link to='#'><li className='Cat'>Contato</li></Link>
                    <Link to='#'><li className='Cat'>Configuração</li></Link>
                    <Link to='#'><li className='Cat'>Sair</li></Link>
                </ul>
            </div>
            <div className='MenuTopo' id='menuTopo'>
                <div className='MenuIcon' id='menuIcon'>
                    <label className='BtnMenu' id='btnMenu'>&#9776;</label>
                </div>
                <div className='MenuUser' id='menuUser'>
                    <label>Olá {User}</label>
                </div>
            </div>
        </section>
    );
}