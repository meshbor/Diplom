
import React, { useEffect, useState } from 'react';
import './App.css';
import  {Footer}  from '../footer/footer.jsx';
import  {Header}  from '../header/header.jsx';
import CardList from '../cardList/CardList.jsx';
import api from '../utilites/api';

function App() {


    const [cards, setCards]=useState([]);
    const [currentUser,setCurrentUser]=useState([null])


 useEffect(()=>{
   Promise.all([api.getPostList(),api.getUserInfo() ]).then(([dataPosts, dataUser])=>{ // промис.олл - не пропустит компиляцию, пока не выполнятся условия
     setCards(dataPosts);
    //  console.log(dataPosts);
     setCurrentUser(dataUser);
   });
 },[]);

 function handleUpdateUser(userUpdateData) {
  api.setUserInfo(userUpdateData).then((newUser) => {
    setCurrentUser(newUser);
  });
}

function headlyPostLike(posts){
 const liked = posts.likes.some(id=> id=== currentUser?._id); //проверяем , залайкан ли этот пост этим пользователем
 console.log(liked);
 api.changeLikePosts(posts._id, liked).then((newCard)=>{ // посылаем апи-запрос серверу с айди 
  //пользователя и информацией залайкан пост или нет. получаем новую карточку огт сервера
  const newPost = cards.map((cardState)=>{
    console.log('карточка из стейта', cardState);
    console.log('карточка из сервера', newCard);
    return cardState._id === newCard._id ? newCard : cardState; // берем новую карточку и заменяем ей старую
  })
  setCards(newPost)
 })
}

 
  return ( 
  <div className='content_container'>
   <div className='content_carts'>
     <div className="App">
       <Header user={currentUser} onUpdateUser={handleUpdateUser} />
       <CardList goodData={cards} currentUser ={currentUser} onPostsLike={headlyPostLike} /> 
       <Footer />
     </div>
    </div>
  </div>)
}

export default App;
