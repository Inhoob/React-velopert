# Chap10. 일정관리 웹 어플리케이셤 만들기

jsconfig.json 파일을 만들어서 내가 특정 경로를 열지 않아도 자동완성이 되게 함

flex:1 을 주면 차지할 수 있는 모든 영역을 차지함.

n:th-child(even)으로 짝수번째 칸마다 색을 살짝 어둡게 할 수 있음.
&+&{} 으로 칸마다 테두리를 넣어줌

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

상태관리는 전부 App.js에서 해줄 것

1. 렌더링
   todos를 App.js에 만들어놓고 TodoList로 전달해준 뒤, 거기서 map으로 순회시켜서 todo를 TodoListItem으로 전달

2. 값 입력
   TodoInsert에서 값 입력. useCallback 쓰는 이유 : 한 번 함수를 만들고 재사용 가능 하도록

3. 지우기
   filter를 이용해 onRemove함수작성.

4. 수정
   onToggle 함수를 App에 만들고, TodoList 컴포넌트에 props로 넣어주기. 그리고 TodoListItem까지 전달
