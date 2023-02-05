import './cardList.css';
import Card from '../Card/Card'


const CardList = ({goodData}) => {
    return (
        
        <div className='cards'>
            
            {goodData.map((item, index)=> // раскрываем массив методом map
            <Card  key={index} {...item}/>) //прокидываем пропсы (расспредиваем каждый item, т.е. достаем из объекта ключи)
             //указываем ключи для карточек (чтобы реакт мог рендерить не все карточки, после изменения в какой-либо, а рендерить изменения только в  конкретной)
            }
        </div>
      
        
    );
  };
  
  export default CardList;