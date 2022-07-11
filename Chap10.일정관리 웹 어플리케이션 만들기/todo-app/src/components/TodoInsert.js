import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
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
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState(' ');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      //submit 이벤트는 브라우저에서 새로고침을 발생시키는데 preventDefault로 이를 방지 가능
      //onClick으로 해도 되지만 onSubmit은 Enter키에도 반응 한다. onClick 이용시에는 Enter를 따로 처리해줘야함
      e.preventDefault();
    },
    [onInsert, value],
  );
  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={onChange}
        ></Input>
        <Button type="submit">
          <i className="fa-solid fa-plus"></i>
        </Button>
      </Form>
    </>
  );
};

export default TodoInsert;
