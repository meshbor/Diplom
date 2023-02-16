
import React from 'react';
import CardList from '../../CardList/cardList';


export const CollectionPage = ({cards, currentUser, headlyPostLike})=>{


    

   return (
   <>
   
   <CardList goodData={cards} currentUser ={currentUser} onPostsLike={headlyPostLike} />   

   
   
   </>

   )

}