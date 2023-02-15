
import React, { useEffect, useState } from 'react';
import './App.css';
import  {Footer}  from '../Footer/footer.jsx';
import  {Header}  from '../Header/header.jsx';
import CardList from '../cardList/CardList.jsx';
import api from '../utilites/api';
import SearchInfo from '../SearchInfo/index.jsx';



function App() {


    const [cards, setCards]=useState([]);

    const [currentUser,setCurrentUser]=useState([null]);
    const [searchQuery, setSearchQuery] = useState('');



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

 
function headlyPostLike(posts){
  const liked = liked.some(id=> id=== currentUser?._id);
  api.changeLikePosts(posts._id, liked).then((newCard)=>{
   const newPost = cards.map((cardState)=>{
     console.log('карточка из стейта', cardState);
     console.log('карточка из сервера', newCard);
   })
  })
 }
 const handleInput = (e)=> {
  setSearchQuery(e.target.value)
 }
 useEffect(() => {
  const filteredCards = cards.filter((item) =>
  item.name.includes.toUpperCase()(searchQuery.toUpperCase())
  );
  setCards([...filteredCards])
 }, [searchQuery])
  return ( 
  <div className='content_container'>
  <div className='content_carts'>
  <div className='App'>
  <Header user={currentUser} onUpdateUser={handleUpdateUser} /> 
  <main className='content container'>
  <SearchInfo searchText={searchQuery} searchCount = {cards.length}/>
  <div>
    <CardList  goodData={cards} currentUser ={currentUser} onPostsLike={headlyPostLike}/>
  </div>
    </main>
    <Footer />
  </div>
 </div>
 </div>)
}

export default App;
