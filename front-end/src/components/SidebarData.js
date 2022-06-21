import React from "react";
import * as GoIcons from 'react-icons/go';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';

export const SidebarData = [
    {
        title: 'Inicio',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Sobre',
        path: '/about',
        icon: <IoIcons.IoAlertCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Configuração',
        path: '/settings',
        icon: <GoIcons.GoGear />,
        cName: 'nav-text'
    }
]