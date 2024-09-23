import { useState } from "react";

const Login: React.FC = () => {
  const [id, setId] = useState<number | ''>('')
  const [name, setName] = useState<string>('');

  const handleLogin = (event: React.FormEvent) => {
    /*
    메서드는 어떤 이벤트를 명시적으로 처리하지 않은 경우,
    해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정합니다.
    */
    event.preventDefault();
    if (id && name) {
      Login(Number(id), name);
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