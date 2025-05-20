import UserName from './UserName';
import Password from './Password';
import LoginBtn from './LoginBtn';
import SignUpBtn from './SignUpBtn';
import ForgotPassword from './ForgotPassword';
const Form = () => {
  return (
    <div className="container">
      <UserName />
      <Password />
      <ForgotPassword />
      <LoginBtn />
      <SignUpBtn />
    </div>
  );
};

export default Form;
