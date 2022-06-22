## 1.1 왜 리액트인가?

```
{
  "title":"Hello",
  "contents":"Hello World",
  "likes":1
}
```

위의 코드에서 likes 값을 2로 업데이트하려면 어떻게 해야 하나?
이것을 해결하기 위해 페이스북은 어떻게 변화를 줄지 고민하기보다 기존 뷰를 날려버리고 처음부터 새로 렌더링 하는 것을 선택했다. 이렇게 할 경우 애플리케이션 구조가 매우 간단해지고, 뷰가 어떻게 생길지 선언하면 된다.

리액트는 MVC 프레임워크와 달리 V(View)만 신경쓰는 라이브러리다.
<br><br/>

### 컴포넌트 : 재사용이 가능한 API로 수많은 기능을 내장하고 있으며, 컴포넌트 하나에서 해당 컴포넌트의 생김새와 작동방식을 정의함

<br><br/>

#### 1.1.1.1 리액트의 초기 렌더링

render(){} 함수는 html 형식의 문자열을 반환하지 않고, 뷰가 어떻게 생겼고 어떻게 작동하는지에 대한 정보를 지닌 객체를 반환한다. 최상위 컴포넌트의 렌더링 작업이 끝나면 지니고있는 정보들을 사용해 HTML 마크업을 만들고 이를 우리가 정하는 실제 페이지의 DOM요소 안에 주입한다.

#### 1.1.1.2 조화 과정

리액트에서 뷰를 업데이트 할 때 "조화과정을 거친다"라고 하는 것이 정확하다. 정확히는 뷰가 변형되는게 아니라 새로운 요소로 갈아끼우는 것이기 때문이다. 컴포넌트에서 데이터를 업데이트할 때 값만 바꿔주는게 아니라 새로운 데이터를 가지고 render 함수를 다시 호출한다. 이 때 이 render함수가 반환하는 결과를 바로 DOM에 반영하지 않고, 이전의 render함수가 만든 컴포넌트 정보와 현재 render함수가 만든 컴포넌트 정보를 비교한다.

## 1.2 리액트의 특징

### 1.2.1 Virtual DOM

DOM은 객체로 문서구조를 표현하는 방법으로 XML이나 HTML로 작성한다. 큰 규모 앱, 트위터 같은 경우 내릴수록 수백 수천개단위의 정보를 표현하는데 DOM에 직접 접근하다보면 성능이슈가 발생한다. 이것은 DOM자체가 느려서가 아니고 DOM에 변화가 일어나면 CSS를 다시 연산하고, 레이아웃을 구성하고, 페이지를 리페인트하기 때문에 나타나는 현상.

리액트는 Virtual DOM방식을 사용해 DOM업데이트를 추상화함으로써 DOM 처리 횟수를 최소화하고 효율적으로 진행함.

Virtual DOM을 사용하면 실제 DOM에 접근하는 대신 추상화한 자바스크립트 객체(DOM의 가벼운사본느낌)를 구성해서 사용. 데이터를 업데이트 하면 Virtual DOM에 전체 UI를 리렌더링 하고 이전 Virtual DOM에 있던 내용과 현재내용을 비교해 바뀐 부분을 실제 DOM에 적용한다.
리액트를 사용하는 이유는 **_업데이트 처리 간결성_**이다. UI업데이트 과정에서 생기는 복잡함을 모두 해소하고 쉽게 업데이트에 접근할 수 있다.