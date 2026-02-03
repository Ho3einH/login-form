import { useState } from 'react';
import { FcLock, FcUnlock } from 'react-icons/fc';

function Input({ label, id, icon, type = 'text', size = 'md' }) {
  const [show, setShow] = useState(false);

  const inputSize = {
    lg: '350px',
    md: '250px',
    sm: '150px',
  };

  return (
    <div className="text-container input-container">
      <input
        type={show ? 'text' : type}
        id={id}
        style={{
          width: inputSize[size],
        }}
        className="user pass text"
        required
      />
      <label className="input-label">{label}</label>
      {icon}
      {label === 'رمز عبور' && (
        <a className="show-hide-btn" onClick={() => setShow(!show)}>
          {!show ? <FcUnlock /> : <FcLock className="eye-icon" />}
        </a>
      )}
    </div>
  );
}

export default Input;
