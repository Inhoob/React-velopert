import React from 'react';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';
const DivTodoList = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;
const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <DivTodoList>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        ></TodoListItem>
      ))}
    </DivTodoList>
  );
};

export default TodoList;
