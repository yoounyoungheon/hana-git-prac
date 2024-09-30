import { useSession } from "./SessionContext";

const Profile: React.FC = () => {
  const { session, logout} = useSession();
  const { loginUser } = session;
  return (
      <div className="profile-container">
        <h1>
          Hello, {loginUser?.name}! <span className="age"></span>
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