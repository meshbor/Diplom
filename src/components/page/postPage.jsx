import { Header } from "../header/header";
import React, { useEffect, useState } from 'react';
import Spinner from "../spinner/Spinner";
import { Footer } from "../footer/footer";
import api from "../utilites/api";
import { Post } from "../post/Post";
export const PostPage = ()=>{
   const postId ='63d5121b59b98b038f77ad98' ;
    const [cards, setCards]=useState([]);
    const [currentUser,setCurrentUser]=useState([null]);
    const [ isloading,setIsloading]=useState([false]);
    const [ post,setPost]=useState([null]);

    

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
            isloading? (<Spinner/>) : (<Post {...post} currentUser ={currentUser}/>)
          }
          
         </div>
       </div>

       
       
   
   
   </>

   )

}