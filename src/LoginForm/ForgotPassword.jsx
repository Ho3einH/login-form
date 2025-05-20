const ForgotPassword = () => {
  return (
    <div className="checkbox-container">
      <div className="save-pass">
        <input id="checkbox" type="checkbox" className="checkbox-input" />
        <label htmlFor="checkbox" className="checkbox-label">
          ذخیره اطلاعات
        </label>
      </div>
      <a href="#" className="forgot-pass">
        فراموشی رمزعبور
      </a>
    </div>
  );
};

export default ForgotPassword;
