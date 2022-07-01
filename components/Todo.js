import React from 'react';
import cardStyles from '../styles/Card.module.css';

const Todo = ({ title, completed }) => {
  return (
    <div className={cardStyles.card}>
      <p className={cardStyles.title}>{title}</p>
      <style jsx>
        {`
          p {
            text-decoration: ${completed ? 'line-through' : 'none'};
          }
        `}
      </style>
    </div>
  )
}

export default Todo;
