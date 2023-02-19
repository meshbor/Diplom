


import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Link, useNavigate } from 'react-router-dom';
import s from './index.module.css'

export const Post = ({image, title, text, author, })=>{
const authorPost = author.name;// ввел переменную - взял значение объекта 'author',
// полученного в ответе сервера по ключу 'name'
let navigate = useNavigate(); //хук для того чтобы при нажатии на карточку вылетало окно с постом именно этой карточки с данным айди
const handleClick=()=>{
navigate('/');
};

const location = useLocation();

// useEffect(()=>{
//    if (location.search.includes('name=dear')) {
//      navigate('/');
//    }
//  }, [location.search]);

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

   <button onClick={handleClick} className="btn"> назад</button>

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