import React from 'react';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  return (
    <TodoTemplate>
      <TodoInsert>app을만들자</TodoInsert>
      <TodoList></TodoList>
    </TodoTemplate>
  );
};

export default App;
