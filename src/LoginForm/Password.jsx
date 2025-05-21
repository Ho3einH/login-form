import { FaLock } from 'react-icons/fa';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
const Password = ({ value, onChange }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="text-container">
      <input
        type={show ? 'text' : 'password'}
        id="password"
        className="pass text"
        value={value}
        onChange={onChange}
        required
      />
      <label htmlFor="password" className="input-label">
        رمز عبور
      </label>
      <FaLock className="label-user-icon " />
      <a className="show-hide-btn" onClick={() => setShow(!show)}>
        {show ? <FaEyeSlash /> : <FaEye className="eye-icon" />}
      </a>
    </div>
  );
};

export default Password;
