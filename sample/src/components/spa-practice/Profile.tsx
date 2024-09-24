import { User } from "../../utils/type";

  
interface ProfileProps {
    user: User;
    logout: () => void;
  }
  
  const Profile: React.FC<ProfileProps> = ({ user, logout }) => {
    return (
      <div className="profile-container">
        <h1>
          Hello, {user.name}! <span className="age"></span>
        </h1>
        <span className="user-name">
          logined
        </span>
        <div> </div> 
        <button onClick={logout} className="logout-button">
        SignOut
        </button>
      </div>
    );
  };
  
  export default Profile;