import React from 'react';

const TodoLayout = ({ children }) => {
  return (
    <div className='post__layout'>
      <h1 className='layout__title'>Todos</h1>
      <main>{children}</main>
    </div>
  )
}

export default TodoLayout;
