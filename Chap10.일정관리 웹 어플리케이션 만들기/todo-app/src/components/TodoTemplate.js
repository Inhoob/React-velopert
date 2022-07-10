import React from 'react';
import styled from 'styled-components';

const TemplateContainer = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`;
const AppTitle = styled.div`
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  background: white;
`;

const TodoTemplate = ({ childeren }) => {
  return (
    <div>
      <TemplateContainer>
        <AppTitle>일정 관리</AppTitle>
        <Content>{childeren}Todo앱을 만들자</Content>
      </TemplateContainer>
    </div>
  );
};

export default TodoTemplate;
