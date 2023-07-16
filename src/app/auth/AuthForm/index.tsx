import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import Logo from "@/app/components/common/Logo";
import TextField from "@/app/components/common/form/TextField";
import Button from "@/app/components/common/button/Button";
import { URL } from "@/app/constants/url.constant";
import * as S from "./styles";

type Props = {
  isLogin: boolean;
};

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function AuthForm({ isLogin }: Props) {
  const methods = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
                minLength: 8,
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
                  validate: (value) => value === methods.watch("password"),
                }}
              />
            )}

            {!isLogin && (
              <S.PasswordInformations>
                Password must contain at least 8 characters
              </S.PasswordInformations>
            )}

            <Button
              type="submit"
              text={isLogin ? "Login" : "Create new account"}
            />
          </S.AuthCardForm>
        </FormProvider>
        <S.AuthCardFooter>
          <S.AuthCardText>
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
            <S.AuthCardLink href={isLogin ? URL.SIGNUP : URL.LOGIN}>
              {isLogin ? "Create account" : "Login"}
            </S.AuthCardLink>
          </S.AuthCardText>
        </S.AuthCardFooter>
      </S.AuthCard>
    </S.AuthFormWrapper>
  );
}
