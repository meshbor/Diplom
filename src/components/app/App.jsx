import React, { useEffect, useState } from 'react';
import './index.css';
import  {Footer}  from '../Footer/footer.jsx';
import  {Header}  from '../Header/header.jsx';
import api from '../Utilites/api';
import { CollectionPage } from '../Page/Collection/collection';
import { PostPage } from '../Page/PostPage/postPage';
import { Route, Routes } from 'react-router-dom';
import Search from '../Search/search';
import Sort from '../Sort/sort';
import SearchInfo from '../SearchInfo/searchInfo';

const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};


function App() {


    const [cards, setCards]=useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentUser,setCurrentUser]=useState([null]);

    const debounceSearchQuery = useDebounce(searchQuery, 2500);

    const handleRequest = () => {
       const filterCards = cards.filter((item) =>
         item.name.toUpperCase().includes(searchQuery.toUpperCase())
       );
       setCards(filterCards);
  
      api
        .search(searchQuery)
        .then((res) => setCards(res))
        .catch((err) => console.log(err));
    };
  
    useEffect(() => {
      handleRequest();
      console.log('INPUT', searchQuery);
    }, [debounceSearchQuery]);
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      handleRequest();
    };
  
    const handleInputChange = (inputValue) => {
      setSearchQuery(inputValue);
    };
  

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
   
         <Header user={currentUser} onUpdateUser={handleUpdateUser}>
         <>
        <Routes>
                <Route
                  path='/'
                  element={
                    <Search
                      onSubmit={handleFormSubmit}
                      onInput={handleInputChange}
                    />
                  }
                  
                >
                  <SearchInfo searchCount={cards.length} searchText={searchQuery} />
                </Route>
              </Routes>
              </>
          </Header>
   
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