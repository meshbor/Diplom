
import React, { useEffect, useState } from 'react';

// import logo from './logo.svg';
import './App.css';
import CardList from '../cardList/CardList';

import api from '../utilites/api';

function App() {

    const [cards, setCards]=useState([]);
    const [currentUser,setCurrentUser]=useState([])


useEffect(()=>{
  Promise.all([api.getPostList(),api.getUserInfo() ]).then(([dataPosts, dataUser])=>{
    setCards(dataPosts);
    console.log(dataPosts);
    setCurrentUser(dataUser);
  });
// api.getPostList().then((data)=>setCards(data.posts));
// api.getUserInfo().then((dataUser)=>setCurrentUser(dataUser))
},[])

  return (
    
    <div className='content_container'>
      <div className='content_carts'>
      
        <CardList goodData={cards}  />  
      </div>
   </div>
   
  );
}

export default App;
