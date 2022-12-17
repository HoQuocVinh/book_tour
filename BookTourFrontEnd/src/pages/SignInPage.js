import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

import useToggleValue from "~/hooks/useToggleValue";
import { LayoutAuth } from "~/layouts";

import ButtonGoogle from "@/button/ButtonGoogle";
import ButtonSubmitAuth from "@/button/ButtonSubmitAuth";

import TextAuth from "@/text/TextAuth";
import TextForgotPassword from "@/text/TextForgotPassword";

import FormGroup from "@/common/FormGroup";
import Input from "@/input/Input";
import Label from "@/label/Label";
import TogglePassword from "@/toggle/TogglePassword";

import { authLogin } from "~/sagas/auth/auth-slice";
import { getToken } from "~/utils/auth";
const schame = Yup.object({
  email: Yup.string()
    .required("Please enter your emaill address")
    .matches(
      // eslint-disable-next-line no-control-regex
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
      { message: "Please enter valid email address" }
    ),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password must be 8 characters"),
});

const SignInPage = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: yupResolver(schame),
    mode: "onSubmit",
  });
  const dispath = useDispatch();
  const handleSignIn = (values) => {
    dispath(authLogin(values));
    // const { accessToken } = getToken();
    // if (accessToken) {
    //   navigate(-1);
    // }
  };

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        autoClose: 2000,
        pauseOnHover: false,
        draggable: true,
        delay: 50,
      });
    }
  }, [errors]);

  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  return (
    <LayoutAuth heading="Wellcome back" title="Sign in">
      <TextAuth pagraph={`Don't have account?`} span="Sign up" to="/sign-up" />
      <ButtonGoogle>Sign in with google</ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email*</Label>
          <Input
            variant={"outlined"}
            control={control}
            id="email"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password*</Label>
          <Input
            variant={"outlined"}
            control={control}
            id="password"
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Enter your password"
            error={errors.password?.message}
          >
            <TogglePassword
              open={showPassword}
              onClick={handleTogglePassword}
            />
          </Input>
        </FormGroup>
        <TextForgotPassword to="/forgot-password" />
        <ButtonSubmitAuth disabled={isSubmitting} isLoading={isSubmitting}>
          Sign in
        </ButtonSubmitAuth>
      </form>
    </LayoutAuth>
  );
};

export default SignInPage;
