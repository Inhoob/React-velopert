import "./App.css";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
function App() {
  return (
    <div>
      <MyComponent name="react" favoriteNumber={1}>
        리액트
      </MyComponent>
      <Counter></Counter>
      <Say></Say>
    </div>
  );
}

export default App;
