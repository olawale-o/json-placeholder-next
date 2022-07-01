import React from 'react';
import cardStyles from '../../../styles/Card.module.css';
import postStyles from '../../../styles/Post.module.css';
import PostLayout from '../../../components/PostLayout';
import { get } from '../../../api';

const Post = ({ post: { title, body } }) => {
  return (
    <div className={postStyles.postList}>
      <div className={cardStyles.card}>
        <h6 className={cardStyles.title}>{title}</h6>
        <p className={cardStyles.text}>{body}</p>
      </div>
    </div>
  )
};

Post.getLayout = function getLayout(page) {
  const { post: { id } } = page.props;
  return(
    <PostLayout title={`Post ${id}`}>{page}</PostLayout>
  );
}

export async function getServerSideProps(context) {
  const data = await get('/posts/'+context.params.id);
  return  {
    props: {
      post: data,
    }
  }
}

export default Post;
