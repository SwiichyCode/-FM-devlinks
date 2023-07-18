"use client";
import AuthForm from "../_components/AuthForm";
import { URL } from "@/app/constants/url.constant";
import { AUTH_TEXT } from "@/app/(pages)/(auth)/_constant/auth.constant";

export default function SignUp() {
  return (
    <AuthForm
      title={AUTH_TEXT.SIGNUP_TITLE}
      subtitle={AUTH_TEXT.SIGNUP_SUBTITLE}
      buttonLabel={AUTH_TEXT.SIGNUP_BUTTON}
      textLink={AUTH_TEXT.SIGNUP_TEXT_LINK}
      link={AUTH_TEXT.SIGNUP_LINK}
      linkText={AUTH_TEXT.SIGNUP_LINK_TEXT}
      urlRedirection={URL.LOGIN}
      isLogin={false}
    />
  );
}
