import React from 'react';
import logo from "../../img/logo.png";
import search from "../../img/search.svg";
import './Header.css'
import {Link, useLocation} from "react-router-dom";

export const Header = ({searchValue, setSearchValue}) => {
    const location = useLocation()
    console.log()

    return (
        <>
            <header>
                <div className="menu-bar">
                    {/*<a href="index.html" className="img-logo">*/}
                    {/*    <img src={logo} style={{width: '100%', height: '100%', position: 'relative', top: '-10px'}}/>*/}
                    {/*</a>*/}
                    <Link className="img-logo" to={'/'}>
                        <img src={logo} style={{width: '100%', height: '100%', position: 'relative', top: '-10px'}}/>
                    </Link>

                    <nav className="nav-d">
                        <div sclassName="nav-container">
                            <ul style={{marginBottom: '10px', marginTop: '0px'}}>
                                <li className="nav-item">
                                    <Link class={location.pathname === '/' ? 'nav-btn-blue' : 'nav-btn-grey'}  to={'/'}>
                                        Главная
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link class={location.pathname === '/subscription' ? 'nav-btn-blue' : 'nav-btn-grey'} to={'/subscription'}>
                                        Попробовать KNIME
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link class={location.pathname === '/routes' ? 'nav-btn-blue' : 'nav-btn-grey'} to={'/routes'}>
                                        Узлы
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link class={location.pathname === '/documentation' ? 'nav-btn-blue' : 'nav-btn-grey'} to={'/documentation'}>
                                        Документация
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link class={location.pathname === '/about' ? 'nav-btn-blue' : 'nav-btn-grey'} to={'/about'}>
                                        О сайте
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className='search' style={{marginTop: '25px'}}>
                    <input  placeholder={'search'} type="text"/>
                    <img className={'searchImg'} src={search} alt="search"/>
                </div>
            </header>

        </>
    );
};
