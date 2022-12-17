import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

import useToggleValue from "~/hooks/useToggleValue";
import { LayoutAuth } from "~/layouts";

import ButtonGoogle from "@/button/ButtonGoogle";
import ButtonSubmitAuth from "@/button/ButtonSubmitAuth";
import Checkbox from "@/checkbox/CheckBox";
import FormGroup from "@/common/FormGroup";
import Label from "@/label/Label";
import TextAuth from "@/text/TextAuth";
import TogglePassword from "@/toggle/TogglePassword";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Input from "~/components/input/Input";
import { authRegister } from "~/sagas/auth/auth-slice";

const schame = Yup.object({
  fullName: Yup.string().required("Please enter your full name"),
  // email: Yup.string().email().required("Email is required"),
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
const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schame),
    mode: "onSubmit",
  });
  console.log(isSubmitting);
  const dispath = useDispatch();
  const handleSignIn = ({ term, ...values }) => {
    dispath(authRegister(values));
    // if (isSubmitting) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve();
    //       navigate("/sign-in");
    //     }, 1000);
    //   });
    // }
  };

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        autoClose: 1000,
        pauseOnHover: false,
        draggable: true,
        delay: 50,
      });
    }
  }, [errors]);

  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();
  return (
    <LayoutAuth heading="Sign up" title="Sign up">
      <TextAuth
        pagraph="Already have an account?"
        span="Sign in"
        to="/sign-in"
      />
      <ButtonGoogle>Sign up with google</ButtonGoogle>
      <p className="text-grayScale-c3 dark:text-grayScale-c4 mb-5 text-center text-xs lg:text-sm">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="fullname">Full Name*</Label>
          <Input
            variant={"outlined"}
            control={control}
            id="fullname"
            name="fullName"
            type="text"
            placeholder="Jhon Doe"
            error={errors.fullName?.message}
          />
        </FormGroup>
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
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <TogglePassword
              open={showPassword}
              onClick={handleTogglePassword}
            />
          </Input>
        </FormGroup>
        <div className="mb-5 flex items-start gap-x-5">
          <Checkbox
            id="term"
            name="term"
            checked={acceptTerm}
            onClick={handleToggleTerm}
            control={control}
          >
            <p className="text-text2 dark:text-text3 flex-1 select-none text-xs leading-relaxed transition-all dark:text-white lg:text-sm">
              I agree to the
              <Link to="/" className="font-medium text-primary-blue underline">
                {" "}
                Terms of Use
              </Link>{" "}
              and have read and understand the
              <Link to="/" className="font-medium text-primary-blue underline">
                {" "}
                Privacy policy.
              </Link>
            </p>
          </Checkbox>
        </div>
        <ButtonSubmitAuth
          disabled={isSubmitting || !acceptTerm}
          isLoading={isSubmitting}
        >
          Sign up
        </ButtonSubmitAuth>
      </form>
    </LayoutAuth>
  );
};

export default SignUpPage;
