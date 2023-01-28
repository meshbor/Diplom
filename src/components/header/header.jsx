import React from "react";
import './index.css';

export function Header() {
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
            <a className="logo" title="Логотип">
             <img src="" alt=""/>
            </a>
        <form className="search">
          <input className="search__input" placeholder="Поиск"></input>
          <button className="search__btn"></button>
        </form>
        </div>
      </div>
    </header>
  )

};
