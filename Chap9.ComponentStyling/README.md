# 9. 컴포넌트 스타일링

이 장에서는 CSS, SASS, CSS Module, Styled Component 모두를 다루고 있지만 styled-component만 정리하려고 한다.

## styled-components

$ npm install --save styled-components 를 입력하고 시작.

&를 사용하여 Sass 처럼 자기 자신을 선택 할 수 있다.
props 값으로 값을 쉽게 전달해 줄 수 있다

### Tagged 템플릿 리터럴

이 성질을 이용해 styled-components로 만든 컴포넌트의 props를 스타일쪽에서 쉽게 조회할 수 있다.

### 스타일링 된 엘리먼트

styled.button 혹은 styled.input같은 형태로 사용할 수 있다. 컴포넌트에 붙여서도 사용할 수 있다. 이것은 리액트 라우터에서 더 잘 사용할 수 있는데 styled 파라미터에 넣는 경우에는 className props를 최상위 DOM의 className 값으로 설정하는 작업이 되어있어야 한다.(247p 참조)

### 스타일에서 props 조회

```javascript
const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
`;
```

```javascript
<Box color="black">
```

### props에 따른 조건부 스타일링

24번째 줄부터 참고할 것
만약 props.inverted 뒤에 && 을 붙여주지 않는다면 VS Code 확장프로그램에서 신택스 하이라이팅이 제대로 이루어지지 않고 Tagged 템플릿 리터럴이 아니기 때문에 함수를 받아 사용하지 못해 props값을 이용할 수 없다. 만약 조건부 스타일링을 할 때 여러 줄을 사용하지 않는다면 굳이 CSS를 불러와서 사용할 필요는 없지만 props를 참조한다면, 반드시 CSS로 감싸 주어서 Tagged 템플릿 리터럴을 사용해 주어야 한다.

### 반응형 웹을 만드려면?

media 쿼리를 이용한다.
