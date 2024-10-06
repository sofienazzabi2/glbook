import LoginForm from "../components/auth/LoginForm";
import Header from "../components/layout/Header";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="container ">
        <div className="mt-28 flex flex-col justify-center items-center ">
          <h1 className="text-5xl font-bold mb-6 text-center">Login</h1>

          <LoginForm />
          <div className="mt-5 flex items-center gap-2">
            <p className="font-bold text-black">Don't have an account yet?</p>
            <Link className="text-secondary font-bold" to="/register">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
