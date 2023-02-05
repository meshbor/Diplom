import React from "react";
import './index.css';
import logo from '../assets/logo.svg';

export function Header() {
  return(
    <header className="header">
            <a className="logo" title="Логотип">
             <img src={logo} alt="Логотоп" className="logo"/>
            </a>
        <form className="search">
          <input className="search__input" placeholder="Поиск"></input>
          <button className="search__btn">Найти</button>
        </form>
       <div> 
          <button className="log_btn"> Вход </button>
          <button className="reg_btn"> Регистрация </button>
        </div>
    </header>
  )

};
