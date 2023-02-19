import React from "react";
import './index.css';
import logo from '../Assets/logo.svg';
import Search from "../Search/search";

export function Header(props) {
  console.log(props);
  return(
    <header className="header">
            <a href="/" title="Логотип">
             <img src={logo} alt="Логотоп" className="logo"/>
            </a>
        <Search changeInput = {props.changeInput}/>
       <div> 
          <button className="log_btn"> Вход </button>
          <button className="reg_btn"> Регистрация </button>
        </div>
    </header>
  )

};
