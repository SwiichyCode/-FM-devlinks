"use client";
import AuthCard from "../_components/AuthCard";
import { URL } from "@/app/constants/url.constant";
import { AUTH_TEXT } from "@/app/(pages)/(auth)/_constant/auth.constant";

export default function Login() {
  return (
    <AuthCard
      title={AUTH_TEXT.LOGIN_TITLE}
      subtitle={AUTH_TEXT.LOGIN_SUBTITLE}
      buttonLabel={AUTH_TEXT.LOGIN_BUTTON}
      textLink={AUTH_TEXT.LOGIN_TEXT_LINK}
      link={AUTH_TEXT.LOGIN_LINK}
      linkText={AUTH_TEXT.LOGIN_LINK_TEXT}
      urlRedirection={URL.HOME}
      isLogin={true}
    />
  );
}
