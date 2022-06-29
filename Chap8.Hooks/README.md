# 8장. Hooks

Hooks는 함수 컴포넌트에서도 상태관리를 할 수 있는 useState, 렌더링 직후 작업을 설정하는 useEffect 등 기능을 제공하여 기존의 함수 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해줌.

## 8.1 useState

함수 컴포넌트에서 가변적인 상태를 지닐 수 있게 해줌.

## 8.2 useEffect

컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정.
클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태로 봐도 무방하다

```javascript
//마운트 될 때만 실행
useEffect(() => {
  console.log("렌더링");
}, []);

//특정값이 업데이트 될 때만 실행
useEffect(() => {
  console.log(name);
}, [name]);

//컴포넌트가 언마운트 되기 전이나 업데이트 되기 직전에 어떤 작업을 수행하고 싶다면 cleanup 함수를 반환할것
useEffect(() => {
  console.log("effect");
  console.log(name);
  return () => {
    console.log("cleanup");
    console.log(name);
  };
}, [name]);
```

## 8.3 useReducer

useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해 주고 싶을 때 사용하는 Hook.
리듀서는 현재상태, 업데이트를 위해 필요한 정보를담은 action 값을 전달받아 새로운 상태를 반환. 새로운 상태를 만들 때 불변성을 지켜줄것
useReducer의 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 뺄 수 있다는 것.

## 8.4 useMemo

함수 컴포넌트 내부에서 발생하는 연산 최적화 할 수 있음.
예를들어 내가 평균값 구하는 함수 컴포넌트를 만들었다고 했을 때 number를 입력할 때마다 계속 연산을 할 필요는 없다. 내가 list에 숫자를 추가한 순간에만
평균값을 구하면 되는 것이다. 이런 상황에서

```javascript
const avg = useMemo(() => getAverage(list), [list]);
```

이런식으로 해주면 list가 바뀔 때에만 연산을 실행하고, 그 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식이다.

## 8.5 useCallback

useMemo와 상당히 비슷한 함수이다. 렌더링 성능을 최적화해야되는 상황에서 사용함. 이 Hook을 사용하면 만들어 놨던 함수를 재사용할 수 있다.
useCallback의 첫번째 파라미터는 생성하고 싶은 함수를 넣고, 두 번째 파라미터에는 배열(바뀔때 새로운 함수를 생성할)을 넣는다.

```javascript
const onChange = useCallback((e) => {
  setNumber(e.target.value);
}, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성
const onInsert = useCallback(() => {
  const nextList = list.concat(parseInt(number));
  setList(nextList);
  setNumber("");
}, [number, list]); // number 혹은 list 가 바뀌었을 때만 함수 생성. onInsert는 number,list를 조회해서
//nextList를 생성하기 때문에배열안에 list를 반드시 넣어줘야한다
```

## 8.6 useRef

함수 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해줌. useRef를 사용해 ref를 설정하면 useRef를 통해 만든 객체 안의 current값이 실제 엘리먼트를 가리킴.
ref안의 값이 바뀌어도 컴포넌트가 렌더링 되지 않으니 렌더링과 관련이 없는 값을 관리할때만 이런 방식으로 코드를 작성할 것.

## 8.7 커스텀 Hooks 만들기

여러 컴포넌트에서 비슷한 기능을 공유할 경우, Hook을 직접 작성해서 로직을 재사용할 수 있다.
