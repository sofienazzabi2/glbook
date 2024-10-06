import classNames from "classnames";
import useClickOutside from "../../common/hooks/useClickOutside";
import { useLogin } from "../../common/hooks/useLogin";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useCallback, useRef } from "react";
import { useForm } from "react-hook-form";
import { getErrorMessage } from "../../store/auth/authActions";

export type UserOnLoginType = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const login = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<UserOnLoginType>();

  const onSubmit = useCallback(
    (data: { email: string; password: string }) => {
      login.execute(data);
    },
    [login]
  );

  useClickOutside(formRef, () => {
    clearErrors();
  });

  const error = login.error;
  const inProgress = login.isLoading;

  return (
    <form
      ref={formRef}
      className="mt-7 flex flex-col gap-5 w-full max-w-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input
          id="field-email"
          placeholder="email..."
          className={classNames(
            errors.email &&
              "border border-red-500 focus:ring-red-500 focus:ring-2"
          )}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
        />
        <p className="text-red-500 mt-3 ml-5">{errors.email?.message} </p>
      </div>
      <div>
        <Input
          id="field-password"
          placeholder="Password..."
          type="password"
          className={classNames(
            errors.password &&
              "border border-red-500 focus:ring-red-500 focus:ring-2"
          )}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must have at least 6 characters.",
            },
            maxLength: {
              value: 16,
              message: "Password cannot exceed 16 characters.",
            },
          })}
        />
        <p className="text-red-500 mt-3 ml-5">{errors.password?.message} </p>
      </div>
      {error && <p className="p-1 text-red-500">{getErrorMessage(error)}</p>}
      <Button
        type="submit"
        className="w-full mt-5 text-white"
        color="secondary"
      >
        {inProgress ? "Loading..." : "Log In"}
      </Button>
    </form>
  );
};

export default LoginForm;
