import React from 'react';
import PostList from '../components/PostList';
import PostLayout from '../components/PostLayout';
import { get } from '../api';

const Posts = ({ posts }) => {
  return (
    <div>
      <PostList posts={posts} />
    </div>
  )
}

Posts.getLayout = function getLayout(page) {
  return(
    <PostLayout>{page}</PostLayout>
  );
}

export async function getServerSideProps() {
  const data = await get('/posts');
  return  {
    props: {
      posts: data,
    }
  }
}

export default Posts;
