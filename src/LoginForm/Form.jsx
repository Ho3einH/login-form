import { useState, useEffect } from 'react';
import Header from './Header';
import UserName from './UserName';
import Password from './Password';
import LoginBtn from './LoginBtn';
const Form = () => {
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('username', JSON.stringify(userName));
    localStorage.setItem('password', JSON.stringify(pass));
    setUserName('');
    setPass('');
  };
  useEffect(() => {
    // const data = [
    // JSON.parse(localStorage.getItem('username')),
    // JSON.parse(localStorage.getItem('password')),
    // ];
    // console.log(data[0], data[1]);
    // localStorage.clear();
  }, []);
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
          <LoginBtn />
        </div>
      </form>
    </>
  );
};

export default Form;
