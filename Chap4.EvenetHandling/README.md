# 4장. 이벤트 핸들링

## 4.1 리액트의 이벤트 시스템

이벤트 표기시 주의사항

1. 카멜 표기법으로 작성할 것. onClick
2. 이벤트에 실행할 자바스크립트 코드를 전달하지 않고 함수형태의 값을 전달.
3. DOM 요소에만 이벤트를 설정할 수 있음.(div, button, input, form, span)
   예를들어 <Say onClick={doSomething}> 이라면 onClick인 props를 전달하는 것이지, doSomething이라는 함수를 실행하는 것이 아니다.
   컴포넌트에 자체적으로 이벤트를 등록할 수는 없지만, 전달받은 props를 컴포넌트 내부의 DOM 이벤트로 설정 가능하다.

```
<div onClick={this.props.onClick}>
  {}
</div>
```

## 4.2 예제로 이벤트 핸들링 익히기

```
onChange={
  (e)=>{
    console.log(e)
  }
}
```

코드에서 나타나는 e 객체는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체다.

만약 input이 여러개라면?
e.target.name을 이용하면 된다. 현재 input의 name은 message인데 이 값을 사용해서 state를 설정하면 쉽게 해결할 수 있다.
