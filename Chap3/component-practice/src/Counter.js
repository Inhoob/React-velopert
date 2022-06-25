import { Component } from "react";
class Counter extends Component {
  // constructor(props) {
  //   super(props); //class형 컴포넌트에서 constructor를 작성할 때는 반드시 super(props)를 호출해 주어야 한다.
  //   this.state = {
  //     //state의 초기값 생성
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }
  state = {
    number: 0,
    fixedNumber: 0,
  };
  render() {
    const { number, fixedNumber } = this.state; //state를 조회할 때는 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지않는값:{fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              console.log("방금 state가 호출되었다.");
              console.log(this.state);
            });
            // this.setState((prevState, props) => {
            //   //이런식으로 두개를 쓰면 2씩 올라가도록 할 수 있음.props를 쓰지 않기 때문에 생략해도 좋음.
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });
            // this.setState((prevState, props) => {
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
export default Counter;
