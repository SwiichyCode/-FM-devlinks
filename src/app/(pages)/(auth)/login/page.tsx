"use client";
import AuthForm from "../_components/AuthForm";
import { URL } from "@/app/constants/url.constant";
import { AUTH_TEXT } from "@/app/constants/auth.constant";

export default function Login() {
  return (
    <AuthForm
      title={AUTH_TEXT.LOGIN_TITLE}
      subtitle={AUTH_TEXT.LOGIN_SUBTITLE}
      buttonLabel={AUTH_TEXT.LOGIN_BUTTON}
      textLink={AUTH_TEXT.LOGIN_TEXT_LINK}
      link={AUTH_TEXT.LOGIN_LINK}
      linkText={AUTH_TEXT.LOGIN_LINK_TEXT}
      isLogin
      urlRedirection={URL.HOME}
    />
  );
}
