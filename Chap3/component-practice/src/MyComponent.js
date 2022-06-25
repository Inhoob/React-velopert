import propTypes from "prop-types";
//함수형 컴포넌트에서 props 사용하기
// const MyComponent = ({ name, favoriteNumber, children }) => {
//   // const { name, children } = props; //구조분해할당 => props.name, props,children을 그냥 사용할 수 있다.
//   return (
//     <div>
//       제이름은 {name}입니다
//       <br />
//       children 값은 {children}입니다
//       <br />
//       제가 제일 좋아하는 숫자는 {favoriteNumber}입니다
//     </div>
//   );
// };
import { Component } from "react";
class MyComponent extends Component {
  render() {
    const { name, children, favoriteNumber } = this.props; //구조분해할당
    return (
      <div>
        안녕하세요 제이름은 {name}입니다. <br />
        children 값은 {children}입니다. <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}
MyComponent.defaultProps = {
  name: "기본 이름",
};
MyComponent.propTypes = {
  name: propTypes.string,
  favoriteNumber: propTypes.number.isRequired,
};
export default MyComponent;
