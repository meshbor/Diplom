import './cardList.css';
import Card from '../Card/Card'
import data from '../assets/data.json';

const CardList = () => {
    return (
        <div className='cards'>
            
            {data.map((item, index)=> // раскрываем массив методом map
            (<Card {...item} key={`${index}`-`${item.title}`}/>)) //прокидываем пропсы (расспредиваем каждый item, т.е. достаем из объекта ключи)
             //указываем ключи для карточек (чтобы реакт мог рендерить не все карточки, после изменения в какой-либо, а рендерить изменения только в  конкретной)
            }
        </div>
      
        
    );
  };
  
  export default CardList;