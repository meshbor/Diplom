
import React, { useEffect, useState } from 'react';
import Spinner from "../../Spinner/spinner";
import api from "../../Utilites/api";
import { Post } from "../../Post/Post";
import { useParams } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../../context/userContext';
export const PostPage = ()=>{
   // const postId ='63d5121b59b98b038f77ad98' ;
    const [cards, setCards]=useState([]);
    const [currentUser,setCurrentUser]=useState([null]);
    const [ isloading,setIsloading]=useState([false]);
    const [ posts,setPost]=useState([null]);

    const {postId} = useParams();
    const {headlyPostLike} = useContext(UserContext);
// console.log(postId);

const onPostsLike=()=>{ // ловим тут функцию онпостлайк, которая будет проверять залайкан ли пост пользователем
   headlyPostLike(posts)
};
    useEffect(()=>{
setIsloading(true);
api.getUserInfo().then((userData)=>setCurrentUser(userData)) ; 
api // делаем запрос
.getPostsById(postId)// возвращается промес
.then((postData)=>setPost(postData))//обрабатываем через зен и кетч
.catch((err)=>console.log('err',err))
.finally(()=>setIsloading(false));//это позволяет отключить спиннер, после любого ответа сервера на наш запрос (ошибка. не ошибка - не важно)
 
},[postId]);




   return (
   <>
   
      

      <div className="content_container">

      

         <div className="content_carts">
            
          
          {
            isloading? (<Spinner/>) : (<Post {...posts}
                currentUser ={currentUser} 
                onPostsLike={onPostsLike}/>)
          }
          
         </div>
       </div>

       
       
   
   
   </>

   )

}