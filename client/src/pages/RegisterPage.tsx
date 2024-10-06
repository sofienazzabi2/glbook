import RegisterForm from "../components/auth/RegisterForm";
import Header from "../components/layout/Header";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="mt-28 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold mb-6 text-center">
            Create new account
          </h1>
          <RegisterForm />
          <div className="flex items-center gap-2 mt-3">
            <p className="font-bold text-black">Already A Member?</p>
            <Link className="text-secondary font-bold" to="/login">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
