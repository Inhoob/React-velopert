# 6장. 컴포넌트 반복

## 6.1 map()함수

```javascript
arr.map(callback, [thisArg]);
```

callback:새로운 배열의 요소를 생성하는 함수로 파라미터는 다음 세 가지이다.

- currentValue : 현재 처리하고 있는 요소
- index : 현재 처리하고 있는 요소의 index 값
- array : 현재 처리하고 있는 원본 배열

thisArg(선택항목) : callback 함수 내부에서 사용할 this 레퍼런스

## 6.2 key 설정

key는 컴포넌트 배열을 렌더링 할 때 어떤 원소에 변동이 있는지 알아내기 위해 사용한다. key가 없을때는 virtual DOM을 비교하는 과정에서
리스트를 순차적으로 비교하면서 변화를 감지하지만, key가 있다면 이 값을 사용해 어떤 변화가 일어났는지 빠르게 알 수 있다.

이 키는 **고유한 값**을 해 줘야한다. 교유한 값이 없다고 index를 사용하면 배열이 변경될 때 효율적으로 리렌더링하지 못한다.

### 특정 항목 추가

push는 기존 배열 자체를 변경하지만 concat은 새로운 배열을 만들어준다.
리액트에서 상태를 업데이트 할 때는 기존 상태를 그대로 두면서 새로운 값을 상태로 설정해야한다. **불변성유지**를 해줘야 컴포넌트 성능을 최적화 할 수 있다.

onClick할 때마다 id값은 nextId로 해주고 nextId는 setNextId를 통해 1씩 추가해주는 식으로 했다.

### 특정 항목 제거

filter를 이용해 특정항목을 제거한다.
예제에서는 doubleclick을 할 때 지워지는식으로 했다.

```javscript
const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
const nameList = names.map((name, index) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
```

## 새롭게 알게된 것

onDoubleClick에서 나는 바로 onRemove를 넣어줬다가 렌더링이 안됐는데 ()=>onRemove(name.id)를 넣고 해결이 됐다. 그 이유는?
상태 안에서 배열을 변형할 때 직접 배열에 접근하지 말고 concat,filter등 배열 내장함수를 이용해 새로운 배열을 만들고 그 것을 새로운 상태로 설정해주자.
