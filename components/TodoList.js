import React from 'react';
import Todo from './Todo';
import postStyles from '../styles/Post.module.css';

const TodoList = ({ todos }) => {
  return (
    <ul className={postStyles.postList}>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <Todo {...todo} />
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList;
