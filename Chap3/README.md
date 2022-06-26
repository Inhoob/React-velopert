# 3장. 컴포넌트(App,Counter,MyComponent)

rsc를 입력하면 자동으로 컴포넌트를 빠르게 입력할 수 있다.

## props

- 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있다. 컴포넌트 속성을 설정할 때 사용하는 요소
- 기본 props 설정: defaultProps 이용
- 태그 사이의 내용을 보여주는 props = children
- component의 필수 props를 지정하거나 props의 타입을 지정할 때는 propTypes 사용(import Proptypes from 'prop-types')

## state

- 컴포넌트 내부에서 바뀔 수 있는 값을 의미한다.
- state를 사용할 때는 반드시 setState 혹은 useState를 통해 전달받은 세터함수를 사용해야한다.만약 배열이나 객체를 업데이트하고싶다면 배열이나 객체 사본을 만들고, 사본에 값을 업데이트한 후, 그 사본의 상태를 setState혹은 세터함수를 통해 업데이트한다.

```
const object={a:1,b:2,c:3};
const nextObject={...object,b:2};//사본을 만들어서 b만 덮어쓰기

const array=[
  {id:1,value:true},
  {id:2,value:true},
  {id:3,value:false}
]
let nextArray=array.concat({id:4})//새 항목추가
nextArray.filter(item->id!==2)//id가 2인항목 제거
nextArray.map(item=>(item.id===1?{...item,value:false}:item)))//id가 1이라면, value를 false로 바꿔준다.
```

<br>
<br>
> 구조분해할당

```
const { name, children } = props; //구조분해할당 => props.name, props,children을 그냥 사용할 수 있다.
```

> 배열비구조화할당

```
const arr=[1,2];
const one=arr[0];
const two=arr[1];
//위의 코드를 아래처럼 간편하게 표현할 수 있다.
const arr=[1,2];
const[one,two]=arr;
```
