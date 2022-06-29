import { useEffect, useState } from "react";
import { useReducer } from "react";
import { useInputs } from "./useInputs";
//useState 사용시
// const Info = () => {
//   const [name, setName] = useState("");
//   const [nickname, setNickname] = useState("");
//   useEffect(() => {
//     console.log("effect");
//     console.log(name);
//     return () => {
//       console.log("cleanup");
//       console.log(name);
//     };
//   }, [name]);
//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };
//   const onChangeNickname = (e) => {
//     setNickname(e.target.value);
//   };
//   return (
//     <div>
//       <div>
//         <input value={name} onChange={onChangeName}></input>
//         <input value={nickname} onChange={onChangeNickname}></input>
//       </div>

//       <div>
//         <div>
//           <b>이름:</b>
//           {name}
//         </div>
//         <div>
//           <b>닉네임:</b>
//           {nickname}
//         </div>
//       </div>
//     </div>
//   );
// };
//useReducer 사용시
const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange}></input>
        <input name="nickname" value={nickname} onChange={onChange}></input>
      </div>

      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
