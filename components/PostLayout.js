import React from 'react';

const PostLayout = ({ children, title }) => {
  return (
    <div className='post__layout'>
      <h1 className='layout__title'>{title}</h1>
      <main>{children}</main>
    </div>
  )
};

export default PostLayout;
