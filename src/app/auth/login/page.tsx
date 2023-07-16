"use client";
import AuthForm from "../AuthForm";
import { URL } from "@/app/constants/url.constant";

export default function Login() {
  return <AuthForm isLogin urlRedirection={URL.HOME} />;
}
