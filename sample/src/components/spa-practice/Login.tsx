import { useState } from "react";
import { useSession } from "./SessionContext";

const Login: React.FC= () => {
  const [id, setId] = useState<number | "">("");
  const [name, setName] = useState<string>("");
  const {login} = useSession();

  

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault(); // 기본 클릭 방지
    if (id && name) {
      login(Number(id), name);
    }
  
  };
  
  return (
    <div className="login-container">
      <h2 className="login-title">Sign In</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="id" className="login-label">
              Id
            </label>
            <input
              type="number"
              id="id"
              value={id}
              onChange={(e) => setId(Number(e.target.value))}
              className="login-input"
            />
          </div>
          <div className="input-group">
            <label htmlFor="name" className="login-label">
              Name
          </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="login-input"
            />
          </div>
        </div>
        <button type="submit" className="login-button">
          Sign In
        </button>
      </form>
    </div>
  );
};
  
export default Login;
  