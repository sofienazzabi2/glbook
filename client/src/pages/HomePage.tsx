import Button from "../components/Button/Button";
import { useNavigate } from "react-router";
import "./HomePage.scss";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-auto min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="container my-auto ">
        <div className="flex flex-col lg:flex-row justify-around items-center gap-10">
          <div className="">
            <h1
              className="text-[64px] font-semibold leading-[70px] fadeIn"
              style={{ animationDelay: ".4s" }}
            >
              GLBook
            </h1>
            <h4
              className="text-[24px] font-light fadeIn mb-5"
              style={{ animationDelay: ".3s" }}
            >
              Connect with your fellow GLs
            </h4>
            <div className="flex flex-col">
              <div className="fadeIn flex gap-5">
                <Button
                  className="rounded-lg text-white text-xl !px-10 !py-4"
                  color="secondary"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Button>
                <Button
                  className="rounded-lg text-xl !px-10 !py-4"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Signup
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/hand.webp"
              alt="landing"
              className="fadeIn"
              style={{ animationDelay: ".2s" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
