const Login: React.FC = () => {
    return (
      <div className="login-container">
        <h2 className="login-title">Sign In</h2>
        <form className="login-form">
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="name" className="login-label">
                Name
              </label>
              <input type="text" id="name" className="login-input" />
            </div>
            <div className="input-group">
              <label htmlFor="name" className="login-label">
                Password
              </label>
              <input type="password" id="password" className="login-input" />
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