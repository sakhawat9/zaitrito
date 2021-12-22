/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from "react";
import { useForm } from "react-hook-form";
import { FiUser } from "react-icons/fi";

const SignInPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = {};
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__wrapper__icon flex items-center justify-center">
          <span className="far fa-user">
            <FiUser />
          </span>
        </div>
        <h1 className="text-center font-medium text text-5xl">Sign In</h1>
        <form className="login__form" onSubmit={handleSubmit(submitHandler)}>
          <input
            type="email"
            name="Email"
            {...register("email", {
              required: {
                value: true,
                message: "You most enter email address",
              },
              minLength: {
                value: 8,
                message: "This is not long enough to be an email",
              },
              maxLength: {
                value: 120,
                message: "This is too long",
              },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "invalid email address",
              },
            })}
            style={{ fontSize: "2rem" }}
            className={`
         ${errors.email ? "ring-2 ring-red-500" : null}`}
            placeholder="Email"
          />
          <span className="py-2 text-2xl text-red-400">
            {errors?.email?.message}
          </span>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: {
                value: true,
                message: "You most enter password",
              },
              minLength: {
                value: 6,
                message: "Password lenth is more then 5",
              },
            })}
            style={{ fontSize: "2rem" }}
            className={`
             ${errors.password ? "ring-2 ring-red-500" : null}`}
            placeholder="password"
          />
          <span className="py-2 text-2xl text-red-400">
            {errors?.password?.message}
          </span>
          <span className="w-full">
            <input
              type="submit"
              className="cursor-pointer text-white bg-red-600 hover:bg-red-700"
              style={{ transition: "all 0.3s linear" }}
              value="LogIn"
            />
          </span>
        </form>
        <p className="text-center block text-2xl">
          Don't have an account?
          <a
            href="/signUp"
            className="border-b border-b-red-600 font-medium hover:text-red-600"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
