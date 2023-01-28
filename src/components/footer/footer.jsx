import React from "react";
import './index.css';

export function Footer(params) {
  return(
    <footer className="footer">
      <div className="container">
        <div className="top">

         <a href="/">   <div className="social">
              <h1> Соц. сети</h1>
              <h3>vkontakte.ru</h3>
              <h3>telegramm</h3>   
            </div></a>

            <a href="/">  <div className="contact">
              <h1> Контакты</h1>
              <h3> тел: +79999999999</h3>
              <h3> email: ... @mail.ru</h3>
            </div></a>

            <a href="/"> <div className="faq"> 
              <h1> Часто задаваемые вопросы</h1>
              <h3> FAQ </h3>
            </div></a>

        </div>

        <div className="bottom"> <h1> " 2023 Кухня выходного дня"</h1></div>
      </div>
    </footer>
  )

};