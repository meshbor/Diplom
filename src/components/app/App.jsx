import { Header } from '../Header/Header';
import React from 'react';
import './App.css';
import CardList from '../cardList/CardList';

function App() {



  return (

    <main className='content_container'>
    <div className='content_carts'>
    <div className="App">
    <CardList  />
    <Header />
    </div>
   </main>
  );
}

export default App;
