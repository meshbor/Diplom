import React from "react";
import './card.css';
import {ReactComponent as Heart} from '../assets/heart3.svg'; //импортируем реакт компонент, делаем его кастомным тегом
import comment from '../assets/comment.svg';
import star from '../assets/star.svg';
import cn from 'classnames';


const Card=({title,image,likes,currentUser,onPostsLike,_id})=>{ //в скобочках - указываем нужные пропсы, которые прокинули в кардлисте

// function headlyLikeClick(){

//     onPostsLike({_id, likes})
// }
const liked = likes.some((id)=> id=== currentUser?._id); //проверяем не является ли пользователь (id) элементом массива лайков данного поста
const likesLength = `${likes.length}`;
return(
<div className="card">
    <a href="/v2/group-9/posts" className="card_link">

        

        <div className="card_desc">

            <img src={image} alt="" className="card_image" />
         <h1 className="card_name">{title}</h1>
        

        </div>
    </a>
    <div className="card_bottom_menu">

        <div className="card_styky_bottom">
   
            <button className= {cn("card_favorite", {'card_like_activ': liked,})}
             onClick={()=>onPostsLike({_id, likes})}>
              <Heart  className="card_favorite_ikon"/>
              
              
            </button>
        </div>

        <div className="card_counter_like">
            <span>{likesLength}</span>
        </div>

    <div className="card_comment">
        <a href="/v2/:group-9/posts/comments/:postId">
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