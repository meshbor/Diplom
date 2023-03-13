
import { useEffect, useState } from 'react'
import api from '../Utilites/api';
import './index.css'
import { useContext } from 'react';
import { CardContext } from '../../context/cardContext';

import { useForm } from 'react-hook-form';


// export const FormPost = ({addPost, setActiveModal})=>{
// // юзстейт следит за состоянием полей (адресс,имя,рецепт) по средствам функции сетЮзФормПост, которая 
// // в свою очередь изменяется внутри другой функции хедлиФормИнпут ,котораяреагирует на событие (ввод данных)
//     const [userFormPost, setUserFormPost]=useState(
//         {image: '',
//         title:'',
//         text: '',
      
//         }
//     );

//     const hendlyFormInput =(e)=>{
//      setUserFormPost({...userFormPost,[e.target.name]: e.target.value})// расспредиваем юзерФормПост, и для каждого поля будут записыватьсяновые значения
//     }

//     console.log(userFormPost);//
//   const hendlyFormSubmit=(e)=>{
//   e.preventDefault(); // чтобы отменить перезагрузку страницы

//   addPost(userFormPost);

// }
const handleSubmit = (onSubmit) => {
  
};

export const FormPost = ({setActiveModal}) =>{
     
        // const [adress, setAdress]=useState();

        // useEffect(()=>{
        //     if  getValues("image")
        //   },[]);
    
    const {register, handleSubmit, formState: {errors}}= useForm({mode: 'onSubmit'});
    const onSubmit = (data)=>{
        console.log(data);
    };
    console.log(errors);

    console.log({useForm});


    return(
    
    <form onSubmit={handleSubmit(onSubmit)}>

        <div >
            <h1 className='head'>ПОДЕЛИСЬ СВОИМ РЕЦЕПТОМ</h1>
        </div>

       
             <input 
             type='text'
              //  name='image' 
             placeholder="введите url картинки" 
             className = 'input_form'
             {...register('image',{
                required: "обязательное поле",

             })}
               //  value = {userFormPost.adress}
               //  onChange={hendlyFormInput}
             >
             </input>
           
                <img src= {useForm.image} className='image_post' />
            

             <input
             type='text'
              //  name='title'
             placeholder="название блюда"
             className = 'input_form'
            //  value = {userFormPost.title}
            //  onChange={hendlyFormInput}
             {...register('title',{
                required: "обязательное поле",

             })}
             >
             
            </input>
            <textarea
             type='text'
            //  name='text'
             placeholder="рецепт"
             className = 'input_form'
             {...register('text',{
                required: "обязательное поле",

             })}
            //  value = {userFormPost.text}
            //  onChange={hendlyFormInput}
             >
            </textarea>
            <div className=' btn_close_create'>
                <button type='button' className='btn_c' onClick={()=>setActiveModal(false)  }> ОТМЕНА </button>
            <button type='submit' className='btn_c'> СОЗДАТЬ</button>
            </div>
            
    </form>
);  
}