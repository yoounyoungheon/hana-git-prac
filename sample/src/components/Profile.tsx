import { User } from "../utils/type";

  
interface ProfileProps {
    user: User;
    logout: () => void;
  }
  
  const Profile: React.FC<ProfileProps> = ({ user, logout }) => {
    return (
      <div className="profile-container">
        <h1>
          Hello, {user.name}! <span className="age">({user.age})</span>
        </h1>
        <span className="user-name">
          {user.name} <span className="status">logined</span>
        </span>
        <button onClick={logout} className="logout-button">
          SignOut
        </button>
      </div>
    );
  };
  
  export default Profile;