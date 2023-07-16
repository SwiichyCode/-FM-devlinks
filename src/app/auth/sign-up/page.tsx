"use client";
import AuthForm from "../AuthForm";
import { URL } from "@/app/constants/url.constant";

export default function SignUp() {
  return <AuthForm isLogin={false} urlRedirection={URL.LOGIN} />;
}
