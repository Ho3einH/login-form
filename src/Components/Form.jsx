import Header from "./ui/Header";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

const Form = () => {
  return (
    <>
      <form className="container">
        <Header />
        <div className="content">
          <Input
            type="text"
            size="lg"
            id="username"
            label="نام کاربری"
            icon={<FaUser className="label-user-icon" />}
          />
          <Input
            type="password"
            size="lg"
            id="password"
            label="رمز عبور"
            icon={<FaLock className="label-user-icon" />}
          />
          <Button
            label="ورود"
            size="lg"
            icon={<FiLogIn className="login-icon" />}
          />
        </div>
      </form>
    </>
  );
};

export default Form;
