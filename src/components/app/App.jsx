import React from "react";
import './App.css';
import  {Footer}  from '../Footer/footer.jsx';
import  {Header}  from '../Header/Header.jsx';
import CardList from '../cardList/CardList.jsx';

function App() {
 
  return ( 
  <div className='content_container'>
  <div className='content_carts'>
  <div className="App">
    <Header />
    <CardList  />
    <Footer />
  </div>
 </div>
 </div>)
 
}

export default App;
