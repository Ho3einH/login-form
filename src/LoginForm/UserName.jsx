const UserName = () => {
  return (
    <div className="text-container">
      <input required type="text" id="username" className="user text" />
      <label htmlFor="username" className="input-label">
        نام کاربری
      </label>
    </div>
  );
};

export default UserName;
