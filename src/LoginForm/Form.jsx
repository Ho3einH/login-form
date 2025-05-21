import { useState } from 'react';
import Header from './Header';
import UserName from './UserName';
import Password from './Password';
import LoginBtn from './LoginBtn';
import SignUpBtn from './SignUpBtn';
import ForgotPassword from './ForgotPassword';
const Form = () => {
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    setUserName('');
    setPass('');
  };
  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <Header />
        <div className="content">
          <UserName
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <Password value={pass} onChange={e => setPass(e.target.value)} />
          <ForgotPassword />
          <LoginBtn />
          <SignUpBtn />
        </div>
      </form>
    </>
  );
};

export default Form;
