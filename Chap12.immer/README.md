# Chap12. immer를 사용하여 더 쉽게 불변성 유지하기

## immer 사용법

```javascript
import produce from "immer";
const nextState = produce(originalState, (draft) => {
  //바꾸고 싶은 값 바꾸기
  draft.somewhere.deep.inside = 5;
});
```

originalState = 수정하고 싶은 상태 <br>
draft = 상태를 어떻게 업데이트할지 정의하는 함수

draft 내에서 원하는 값을 변경하면, produce 함수가 불변성 유지를 대신해 주면서 새로운 상태를 생성해준다.

immer를 사용하면 push,splice등의 함수를 사용해도 무방하다.
