import { FiLogIn } from 'react-icons/fi';
const LoginBtn = () => {
  return (
    <div className="">
      <button type="submit" id="login-btn">
        ورود <FiLogIn className="login-icon" />
      </button>
    </div>
  );
};

export default LoginBtn;
