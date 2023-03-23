import { Children, useState } from 'react';
import api from '../utilites/api';
import s from './index.module.css';

export const Form = ({title, handleFormSubmit, children}) => {
 

  return (
    <form className={s.form} onSubmit={handleFormSubmit}>
      <h1 className={s.title}>{title}</h1>
      {children}
    </form>
  );
};