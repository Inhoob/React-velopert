import React from 'react';
import styled from 'styled-components';
const DivTodoListItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;
const DivCheckBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  i {
    font-size: 1.5rem;
  }
  .text {
    margin-left: 0.5rem;
    flex: 1;
  }
`;
const TodoListItem = () => {
  return (
    <DivTodoListItem>
      <DivCheckBox>
        <i class="fa-regular fa-square-check"></i>
        <i class="fa-solid fa-square-check checked"></i>
      </DivCheckBox>
    </DivTodoListItem>
  );
};

export default TodoListItem;
