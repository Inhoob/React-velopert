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
  .remove i {
    font-size: 1.5rem;
    color: red;
    cursor: pointer;
    &:hover {
      color: #ff8787;
    }
    color: #ff6b6b;
    display: flex;
    align-items: center;
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
  &.checked {
    i {
      color: #22b8cf;
    }
    .text {
      color: #adb5bd;
      text-decoration: line-through;
    }
  }
`;
const TodoListItem = ({ todo, onRemove }) => {
  const { id, text, checked } = todo; //todo.text와 todo.checked 구조분해할당
  return (
    <DivTodoListItem>
      <DivCheckBox>
        {checked ? (
          <i className="fa-solid fa-square-check checked"></i>
        ) : (
          <i className="fa-regular fa-square-check"></i>
        )}

        <div className="text">{text}</div>
      </DivCheckBox>
      <div className="remove" onClick={() => onRemove(id)}>
        <i className="fa-solid fa-circle-minus"></i>
      </div>
    </DivTodoListItem>
  );
};

export default TodoListItem;
