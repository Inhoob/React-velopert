# Chap10. 일정관리 웹 어플리케이셤 만들기

![](https://velog.velcdn.com/images/colagom/post/a8fe63ef-9a7a-4c99-be61-650a2e816b90/image.gif)

# Todo-List의 기능

1. 내용을 입력하고 엔터 또는 + 버튼을 누르면 목록에 추가된다.
2. 목록에 있는 항목을 오른쪽 빨간색 버튼을 눌러 삭제할 수 있다.
3. 체크 및 체크해제가 가능하다.

이미 기존에 Todo-List를 간단하게 만들어 본 적은 있지만 리액트를 사용해 본 것이 아니고 Styled Component를 배웠으니 이용해 볼 겸 만들었다.

우선 컴포넌트의 구성은 전체적인 틀을 구성하는 todoTemplate, 내용을 입력하고 항목에 추가할 수 있는 todoInsert, 그리고 contents를 담을 todoList와 그 하위항목인 todoListItem으로 구성했다.

모든 함수는 App.js에서 작성하고 props로 내려줬다.

## CSS 새로 공부한 내용

```javascript
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
```

&:nth-child(even) 자식요소의 짝수번째마다 속성을 지정해줄 수 있다. listItem 들의 행에 따라 구분이 쉽도록 짝수번째 칸의 배경색을 바꿔줬다.

&+&{ } 안의 내용은 TodoListItem들과 그 인접요소들에 테두리를 설정해 준 것이다.

전체적인 목업 및 component 구성 자체에 시간을 많이 썼는데 블로그에는 완성된 기능들만 올릴 생각이다.

## 1. 내용 입력 및 list로 추가

```javascript
//App.js
const onInsert = useCallback(
  (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  },
  [todos]
);
```

onInsert의 인자를 받아 새로운 todo를 생성하고, 기존의 todos에 붙여준다.
useCallback은 useMemo와 상당히 비슷한 함수이다. 렌더링 성능을 최적화해야되는 상황에서 사용함. 이 Hook을 사용하면 만들어 놨던 함수를 재사용할 수 있다. useCallback의 첫번째 파라미터는 생성하고 싶은 함수를 넣고, 두 번째 파라미터에는 배열(바뀔때 새로운 함수를 생성할)을 넣는다. 위의 경우 [todos]가 변할 때 함수를 다시 사용하는 개념이다.

그리고 저 onInsert를 props로 TodoInsert에 전달한다.

```javascript
//TodoInsert.js
import React, { useCallback } from "react";
import styled from "styled-components";
import { useState } from "react";
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
  const [value, setValue] = useState(" ");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
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
```

submit 이벤트는 브라우저에서 새로고침을 발생시키는데 preventDefault로 이를 방지 가능하다.

onClick으로 해도 되지만 onSubmit은 Enter키에도 반응 한다. onClick 이용시에는 Enter를 따로 처리해야 한다. submit을 했을 때 props로 전달받은 onInsert로 todo를 추가해주고, input칸을 비우는 작업을 실시한다.

## 2. 목록에서 삭제하는 기능

```javascript
//App.js
const onRemove = useCallback(
  (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  },
  [todos]
);
```

항상 삭제하는 기능은 filter를 이용했다. onRemove를 TodoListItem으로 props로 전달한다.

```javascript
import React from "react";
import styled from "styled-components";
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
  //글씨 색깔 변하게
  /* .text {
    color: #abd5bd;
    text-decoration: line-through;
  } */
`;
const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo; //todo.text와 todo.checked 구조분해할당
  return (
    <DivTodoListItem>
      <DivCheckBox onClick={() => onToggle(id)}>
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
```

## 3. check 및 check 해제기능

```javascript
//App.js
const onToggle = useCallback(
  (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  },
  [todos]
);
```

onToggle은 내가 체크박스를 눌렀을때 해당하는 항목의 checked property를 반대로 바꿔준다.
바로 위에 TodoListItem 코드가 있는데 컴포넌트 안에서 어떤 checkbox를 사용할지 결정할 수 있다. 원래는 classList.add 와 remove로 class 이름을 바꾸면서 그에 따른 css속성으로 처리해야 하는데 Styled Component는 컴포넌트 내에서 처리할 수 있다는 장점이 있다.
