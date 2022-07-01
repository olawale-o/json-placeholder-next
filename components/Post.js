import React from 'react';
import cardStyles from '../styles/Card.module.css';

const Post = ({ title, body }) => {
  return (
    <div className={cardStyles.card}>
      <h6 className={cardStyles.title}>{title}</h6>
      <p className={cardStyles.text}>{body}</p>
    </div>
  )
}

export default Post