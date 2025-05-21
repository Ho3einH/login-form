import { FaUser } from 'react-icons/fa';
const UserName = ({ value, onChange }) => {
  return (
    <div className="text-container">
      <input
        type="text"
        id="username"
        className="user text"
        value={value}
        onChange={onChange}
        required
      />
      <label htmlFor="username" className="input-label">
        نام کاربری
      </label>
      <FaUser className="label-user-icon " />
    </div>
  );
};

export default UserName;
