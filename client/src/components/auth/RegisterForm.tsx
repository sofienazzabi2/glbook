import classNames from "classnames";
import { useCallback, useRef } from "react";

import { emailRegex } from "../../common/constansts";
import useClickOutside from "../../common/hooks/useClickOutside";
import { useRegister } from "../../common/hooks/useRegister";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { useForm } from "react-hook-form";
import { getErrorMessage } from "../../store/auth/authActions";

export type UserOnRegisterType = {
  fullName: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const { execute, isLoading, error } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<UserOnRegisterType>();

  const onSubmit = useCallback(
    (data: UserOnRegisterType) => {
      execute(data);
    },
    [execute]
  );

  useClickOutside(formRef, () => {
    clearErrors();
  });

  return (
    <form
      ref={formRef}
      className="mt-7 flex flex-col gap-5 w-full max-w-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Input
          error={errors.fullName?.message}
          className={classNames(
            errors.fullName &&
              "border border-red-500 focus:ring-red-500 focus:ring-2"
          )}
          placeholder="Full name..."
          {...register("fullName", {
            required: "This field is reqiuired",
            minLength: 4,
            maxLength: 20,
          })}
        />
      </div>
      <div>
        <Input
          error={errors.email?.message}
          placeholder="Email..."
          className={classNames(
            errors.email &&
              "border border-red-500 focus:ring-red-500 focus:ring-2"
          )}
          {...register("email", {
            required: "This field is reqiuired",
            pattern: {
              value: emailRegex,
              message: "Please enter a valid email",
            },
          })}
        />
      </div>
      <div>
        <Input
          error={errors.password?.message}
          placeholder={"Password..."}
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
      </div>
      {error && <p className="p-1 text-red-500">{getErrorMessage(error)}</p>}
      <Button className="w-full mt-5 text-white" color="secondary">
        {isLoading ? "Loading..." : "Create Account"}
      </Button>
    </form>
  );
};

export default RegisterForm;
