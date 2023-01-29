import React from "react";
import './card.css';
import {ReactComponent as Heart} from '../assets/heart.svg'; //импортируем реакт компонент, делаем его кастомным тегом
import comment from '../assets/comment.svg';
import star from '../assets/star.svg'


const Card=({title,text,image,isFavorite})=>{ //в скобочках - указываем нужные пропсы, которые прокинули в кардлисте
 return(
<div className="card">
    <a href="/product" className="card_link">

        

        <div className="card_desc">

            <img src={image} alt="" className="card_image" />
         <h1 className="card_name">{title}</h1>
        

        </div>
    </a>
    <div className="card_bottom_menu">

        <div className="card_styky_bottom">
   
            <button className="card_favorite">
              {/* <img src={Heart} alt="Добавить в избранное" className="card_favorite_ikon"/> */}
              <Heart className={isFavorite? 'card_favorite_ikon': "card_like"} />
            </button>
        </div>

        <div className="card_counter_like">
            <span>0</span>
        </div>

    <div className="card_comment">
        <a href="/product">
            <img src={comment} alt="Добавить комментарий" className=" card_comment_ikon" />
            
        </a>
    </div>
    <div className="card_counter_comment">
            <span>0</span>
        </div>
    <div className="card_rating">
        
        <img src={star} alt="1 star" className="card_star_ikon"/>
        <img src={star} alt="2 star" className="card_star_ikon" />
        <img src={star} alt="3 star" className="card_star_ikon"/>
        <img src={star} alt="4 star" className="card_star_ikon"/>
        <img src={star} alt="5 star" className="card_star_ikon"/>
    </div>

    </div>

    
    

</div>
 )

};
export default Card;