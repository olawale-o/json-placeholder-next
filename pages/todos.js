import React from 'react';
import TodoList from '../components/TodoList';
import TodoLayout from '../components/TodoLayout';
import { get } from '../api';

const Todos = ({ todos }) => {
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
};

Todos.getLayout = function getLayout(page) {
  return(
    <TodoLayout>{page}</TodoLayout>
  );
}

export async function getServerSideProps() {
  const data = await get('/todos');
  return  {
    props: {
      todos: data,
    }
  }
}
export default Todos;
