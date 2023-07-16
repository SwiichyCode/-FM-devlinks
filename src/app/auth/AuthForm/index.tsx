import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { URL } from "@/app/constants/url.constant";
import AuthService from "@/app/auth/auth.service";
import Logo from "@/app/components/common/Logo";
import TextField from "@/app/components/common/form/TextField";
import Button from "@/app/components/common/button/Button";
import * as S from "./styles";

type Props = {
  isLogin: boolean;
  urlRedirection: string;
};

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function AuthForm({ isLogin, urlRedirection }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorApi, setErrorApi] = useState<string | null>(null);
  const methods = useForm<Inputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    let hasError = false;
    setIsLoading(true);

    try {
      if (isLogin) {
        await AuthService.login(email, password);
        router.push(urlRedirection);
      } else {
        await AuthService.register(email, password);
        router.push(urlRedirection);
      }
    } catch (error: any) {
      setErrorApi(error?.response?.data?.error);
      hasError = true;
    } finally {
      if (!hasError) {
        methods.reset();
      }
      setIsLoading(false);
    }
  };

  return (
    <S.AuthFormWrapper>
      <Logo size="large" />
      <S.AuthCard>
        <S.AuthCardHeader>
          <S.AuthCardTitle>
            {isLogin ? "Login" : "Create account"}
          </S.AuthCardTitle>
          <S.AuthCardText>
            {isLogin
              ? "Add your details below to get back into the app"
              : "Let’s get you started sharing your links!"}
          </S.AuthCardText>
        </S.AuthCardHeader>
        <FormProvider {...methods}>
          <S.AuthCardForm onSubmit={methods.handleSubmit(onSubmit)}>
            <TextField
              iconSrc="/images/icon-email.svg"
              labelText="Email address"
              placeholder="e.g. alex@email.com"
              type="email"
              name="email"
              rules={{
                required: "Can’t be empty",
              }}
            />

            <TextField
              iconSrc="/images/icon-password.svg"
              labelText={isLogin ? "Password" : "Create password"}
              placeholder={
                isLogin ? "Enter your password" : "At least 8 characters"
              }
              type="password"
              name="password"
              rules={{
                minLength: isLogin ? undefined : 8,
              }}
            />

            {!isLogin && (
              <TextField
                iconSrc="/images/icon-password.svg"
                labelText="Confirm password"
                placeholder="At least 8 characters"
                type="password"
                name="confirmPassword"
                rules={{
                  validate: (value) => value === methods.getValues("password"),
                }}
              />
            )}

            {!isLogin &&
              (errorApi ? (
                <S.AuthCardError>{errorApi && errorApi}</S.AuthCardError>
              ) : (
                <S.PasswordInformations
                  isError={methods.formState.errors.password?.type as string}
                >
                  Password must contain at least 8 characters
                </S.PasswordInformations>
              ))}

            {isLogin && (
              <S.AuthCardError>{errorApi && errorApi}</S.AuthCardError>
            )}

            <Button
              type="submit"
              text={
                isLoading
                  ? "Loading..."
                  : isLogin
                  ? "Login"
                  : "Create new account"
              }
              disabled={isLoading}
            />
          </S.AuthCardForm>
        </FormProvider>
        <S.AuthCardFooter>
          <S.AuthCardText>
            {isLogin ? "Don’t have an account?" : "Already have an account?"}
          </S.AuthCardText>
          <S.AuthCardLink href={isLogin ? URL.SIGNUP : URL.LOGIN}>
            {isLogin ? "Create account" : "Login"}
          </S.AuthCardLink>
        </S.AuthCardFooter>
      </S.AuthCard>
    </S.AuthFormWrapper>
  );
}
