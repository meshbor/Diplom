

import React from 'react';
import s from '../Post/index.module.css'

export const Post = ({image, title, text, author})=>{
const authorPost = author.name;// ввел переменную - взял значение объекта 'author',
// полученного в ответе сервера по ключу 'name'
   return (
   <>
   <div className={s.container}>
      <div className={s.imgWrapper}>
         <img src={image} alt='#' />
      </div>
   <a href="#" className="button_back"> назад</a>
   <h1 className={s.postTitle}>{title}</h1>
   <div>
      <span> РЕЦЕПТ</span>
   </div>
   <h2 className="recept">{text}</h2>
   
   <div>
      АВТОР РЕЦЕПТА
   </div>
   <h3 className="author">{authorPost}</h3> 
   
   </div>

   </>

   )

}