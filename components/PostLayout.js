import React from 'react';

const PostLayout = ({ children }) => {
  return (
    <div className='post__layout'>
      <h1 className='layout__title'>Posts</h1>
      <main>{children}</main>
    </div>
  )
}

export default PostLayout;
