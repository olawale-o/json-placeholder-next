import React from 'react';
import Post from './Post';
import postStyles from '../styles/Post.module.css';

const PostList = ({ posts }) => {
  return (
    <ul className={postStyles.postList}>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <Post {...post} />
          </li>
        )
      })}
    </ul>
  )
}

export default PostList;
