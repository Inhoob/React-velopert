import React from "react";
import { Component } from "react";
class EventPractice extends Component {
  state = {
    message: "",
    username: "",
  };
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this); //this를 바인딩하는 이유: 함수가 호출될 때 this는 호출부에 따라 결정되므로, 클래스 임의의메서드가 특정 HTML 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어진다.
  //   this.handleClick = this.handleClick.bind(this);
  // }
  handleChange = (e) => {
    //메서드바인딩은 원래 생성자 메서드에서 하는 게 정석이지만 transform-class-properties문법을 사용해서 화살표함수 형태로 메서드를 작성하면 메서드를 만들때마다 constructor를 수정하는 수고를 덜 수 있다.
    this.setState({ [e.target.name]: e.target.value }); //input이 두개 들어있을 때 처리방법. 대괄호 안에 넣으면 변수를 키로 쓸 수 있다.
  };
  handleClick = (e) => {
    alert(this.state.username + ": " + this.state.message);
    this.setState({ message: "", username: "" });
  };
  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>이벤트연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        ></input>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력하세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        ></input>
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
