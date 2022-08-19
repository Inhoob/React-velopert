import { useParams } from "react-router-dom";
const data = {
  inhoob: {
    name: "박인후",
    description: "개발자",
  },
  gildong: {
    name: "홍길동",
    description: "의적",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  return (
    <div>
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
