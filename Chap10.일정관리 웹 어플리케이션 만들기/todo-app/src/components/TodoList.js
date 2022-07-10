import React from 'react';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';
const DivTodoList = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;
const TodoList = () => {
  return (
    <DivTodoList>
      <TodoListItem></TodoListItem>
      <TodoListItem></TodoListItem>
      <TodoListItem></TodoListItem>
    </DivTodoList>
  );
};

export default TodoList;
