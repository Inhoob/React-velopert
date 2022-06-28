# 7장. 컴포넌트의 라이프사이클 메서드

리액트 프로젝트를 진행하다 보면 컴포넌트를 처음으로 렌더링 할 때 어떤 작업을 처리해야 하거나, 컴포넌트를 업데이트 하기 전후로 어떤 작업을 해야 할 수도 있고, 또 불필요한 업데이트를 방지해야 할 수도 있다

## 7.1 라이프사이클 메서드의 이해

> 마운트
> DOM이 생성되고 웹 브라우저상에 나타나는 것

마운트할 때 호출하는 메서드
컴포넌트 만들기 -> constructor -> getDerivedStateFromProps -> render -> componentDidMount

- constructor : 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드
- getDerivvedStateFromProps : props에 있는 값을 state에 넣을 때 사용하는 메서드
- render : 우리가 준비한 UI를 렌더링하는 메서드
- componentDidMount : 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드

**Did 접두사가 붙으면 작업 후에 실행, Will 접두사가 붙으면 작동하기 전에 실행**

> 업데이트

1. props가 바뀔 때
2. state가 바뀔 때
3. 부모 컴포넌트가 리렌더링 될 때
4. this.forceUpdate로 강제로 렌더링을 트리거할 때 업데이트가 발생한다

업데이트 발생 요인 -> getDerivedStateFromProps -> shouldComponentUpdate ->(true반환 시) render -> getSnapshotBeforeUpdate->'실제 DOM 변화'->componentDidUpdate

- getDerivedStateFromProps : 마운트 과정에서도 호출되고 업데이트 시작 전에도 호출됨. props변화에 따라 state값에도 변화를 주고싶을 때 사용
- shouldComponentUpdate : 컴포넌트 리렌더링 여부 결정(true반환시 라이프사이클메서드 계속 실행). forceUpdate사용시 이 과정 생략
- render : 컴포넌트 리렌더링
- getSnapshotBeforeUpdate : 컴포넌트 변화를 DOM에 반영하기 직전에 호출하는 메서드
- componentDidUpdate : 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드

> 언마운트
> 마운트의 반대과정. 컴포넌트를 DOM에서 제거한다
> 언마운트하기 -> componentWillUnmount : 컴포넌트가 웹 브라우저 상에서 사라지기 전에 호출하는 메서드

## 7.2 라이프사이클 메서드 살펴보기

1. render(){...}
   컴포넌트의 모양새 정의. this.props와 this.state에 접근할 수 있으며 리액트 요소를 반환한다. null 이나 false 반환시 아무것도 렌더링되지 않는다.
   DOM을 가져오거나 state를 바꾸려면 componentDidMount에서 처리해야 함.
2. constructor(props){...}
   컴포넌트를 만들때 사용하고 초기 state를 정한다
3. getDerivedStateFromProps
   props로 받아온 값을 state에 동기화시키는 용도로 사용하며, 컴포넌트가 마운트 될 때와 업데이트 때 호출됨

```javascript
static getDerivedStateFromProps(nextProps,prevState){
  if(nextProps.value!==prevState.value){
    return{value:nextProps.value};
  }
  return null
}
```

4. componentDidMount(){...}
   컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행. 이 안에서 다른 자바스크립트 라이브러리나 프레임워크의 함수를 호출하거나 비동기작업 처리

5. shouldComponentUpdate(nextProps,nextState){...}
   props나 state를 변경할 때 리렌더링 여부 결정. 이 메서드를 따로 설정하지 않으면 항상 true값을 반환한다고 생각하면 된다. 컴포넌트 성능 최적화에 사용
6. getSnapshotBeforeUpdate
   이 값은 다음의 componentDidUpdate에서 3번째 파라미터인 snapshot으로 전달받기 위해 사용한다. **스크롤바 위치 유지**처럼 업데이트 하기 직전의 값을
   참고할 일이 있을 때 사용

```javascript
getSnapshotBeforeUpdate(prevProps,prevState){
  if(prevState.array!==this.state.array){
    const {scrollTop, scrollHeight}=this.list
    return {scrollTop,scrollHeightt}
  }
}
```

7. componentDidUpdate(prevProps,prevState,snapshot){...}
   리렌더링 완료 후 실행하여, DOM관련 처리를 해도 무방하고, 이전의 props,state에 접근할 수 있다.
8. componentWillUnmount(){...}
   컴포넌트를 DOM에서 제거할 때 사용. componentDidMount 에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 제거
9. componentDidCatch
   렌더링 도중 오류 발생 시 먹통이 되지않고 UI를 볼수 있게 해주고 parameter로 error와 info를 주어 어디에서 에러가 발생했는지 확인 가능.

## 정리

라이프사이클 메서드를 왜 써야 하는가?
서드파티 라이브러리를 이용하거나 DOM을 직접 건드려야 하는 상황에서 유용하다. 추가로 컴포넌트 업데이트 성능 개선을 할 때 shouldComponentUpdate가 중요
