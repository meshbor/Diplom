
import React, { useEffect, useState } from 'react';
import './App.css';
import  {Footer}  from '../Footer/footer.jsx';
import  {Header}  from '../Header/Header.jsx';
import CardList from '../cardList/CardList.jsx';
import api from '../utilites/api';
import SearchInfo from '../SearchInfo/index.jsx';
import Card from '../Card/Card';
import data from '../assets/data.json'

function App() {


    const [cards, setCards]=useState([]);
    const [currentUser,setCurrentUser]=useState([]);
    const [searchQuery, setSearchQuery] = useState('');


useEffect(()=>{
  Promise.all([api.getPostList(),api.getUserInfo() ]).then(([dataPosts, dataUser])=>{
    setCards(dataPosts);
    console.log(dataPosts);
    setCurrentUser(dataUser);
  });
 //api.getPostList().then((data)=>setCards(data.posts));
 //api.getUserInfo().then((dataUser)=>setCurrentUser(dataUser))
},[])
 
function headlyPostLike(posts){
  const liked = liked.some(id=> id=== currentUser?._id);
  api.changeLikePosts(posts._id, liked).then((newCard)=>{
   const newPost = cards.map((cardState)=>{
    // console.log('карточка из стейта', cardState);
    // console.log('карточка из сервера', newCard);
   })
  })
 }
 const handleInput = (e)=> {
  setSearchQuery(e.target.value)
 }
 useEffect(() => {
  const filteredCards = cards.filter((item) =>
  item.name.includes(searchQuery)
  );
  setCards([...filteredCards])
 }, [searchQuery])
  return ( 
  <div className='content_container'>
  <div className='content_carts'>
  <div className='App'>
  <Header changeInput={handleInput}/> 
  <main className='content container'>
  <SearchInfo searchText={''} searchCount = {''}/>
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
