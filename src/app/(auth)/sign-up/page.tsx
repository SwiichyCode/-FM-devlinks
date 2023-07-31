"use client";
import AuthCard from "../_components/AuthCard";
import { URL } from "@/constants/url.constant";
import { AUTH_TEXT } from "@/app/(auth)/_constant/auth.constant";

export default function SignUp() {
  return (
    <AuthCard
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
