import React, { useEffect, useState } from 'react';
import './index.css';
import  {Footer}  from '../Footer/footer.jsx';
import  {Header}  from '../Header/header.jsx';
import CardList from '../CardList/cardList.jsx';
import api from '../Utilites/api';
import { CollectionPage } from '../Page/Collection/collection';
import { PostPage } from '../Page/PostPage/postPage';
import { Route, Routes } from 'react-router-dom';

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

       <Routes>
        <Route path ='/' element = {
          <CollectionPage cards = {cards}  currentUser={currentUser} headlyPostLike ={headlyPostLike} />
        }
        > </Route>

        <Route path='post/:postId' element = {<PostPage currentUser={currentUser}/>}></Route>

       </Routes>
       
       
       <Footer />
     </div>
    </div>
  </div>)
}

export default App;