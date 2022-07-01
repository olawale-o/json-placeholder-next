import React from 'react';
import Link from 'next/link';
import cardStyles from '../styles/Card.module.css';

const Post = ({ title, body, id }) => {
  return (
    <Link href={`post/${id}`}>
      <a className={cardStyles.card}>
        <h6 className={cardStyles.title}>{title}</h6>
        <p className={cardStyles.text}>{body}</p>
      </a>
    </Link>
  )
}

export default Post