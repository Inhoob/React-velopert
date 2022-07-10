import React from 'react';
import styled from 'styled-components';
const Form = styled.form`
  display: flex;
  background: #495057;
`;
const Input = styled.input`
  background: #495057;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  &::placeholder {
    color: #dee2e6;
  }
  flex: 1;
`;
const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #868e96;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    background: #abd5bd;
  }
`;
const TodoInsert = () => {
  return (
    <>
      <Form>
        <Input placeholder="TodoInsert"></Input>
        <Button type="submit">
          <i className="fa-solid fa-plus"></i>
        </Button>
      </Form>
    </>
  );
};

export default TodoInsert;
