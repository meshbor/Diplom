import { useState } from 'react';
import api from '../../utils/api';
import s from './index.module.css';

export const Form = (props) => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    lastName: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addContact(contactInfo)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Введите данные</h3>
      <input
        className={s.input}
        type='text'
        name='name'
        placeholder='Имя'
        value={contactInfo.title}
        onChange={handleChange}
        required
      />
      <input
        className={s.input}
        type='text'
        name='lastName'
        placeholder='Surname'
        value={contactInfo.lastName}
        onChange={handleChange}
      />
      <input
        className={s.input}
        type='number'
        name='phoneNumber'
        placeholder='Номер телефона'
        value={contactInfo.phoneNumber}
        onChange={handleChange}
      />
      <input type='checkbox' name='checkbox' onChange={handleChange} />
      <button className={s.button}> Отправить</button>
    </form>
  );
};