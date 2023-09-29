import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import AuthService from "../../_services/auth.service";
import TextField from "@/components/ui/TextField";
import Button from "@/components/ui/Button";
import * as S from "./styles";

import useUserProfile from "@/app/(home)/_stores/useUserProfile";
import { Profile } from "@/app/(home)/_types/profile.type";

type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

type Props = {
  buttonLabel: string;
  isLogin: boolean;
  urlRedirection: string;
};

export default function AuthForm({
  buttonLabel,
  isLogin,
  urlRedirection,
}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorApi, setErrorApi] = useState<string | null>(null);
  const methods = useForm<Inputs>();
  const router = useRouter();

  const { setLinks, setProfile } = useUserProfile();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    let hasError = false;
    setIsLoading(true);

    try {
      if (isLogin) {
        const { data, error } = await AuthService.login(email, password);

        localStorage.setItem("user", JSON.stringify(data.user));
        router.refresh();

        if (error) {
          throw new Error(error.message);
        } else {
          router.push(urlRedirection);
          router.refresh();
        }
      } else {
        const { error } = await AuthService.signup(email, password);

        if (error) {
          throw new Error(error.message);
        } else {
          router.push(`${urlRedirection}?email=${email}`);
          router.refresh();
        }
      }
    } catch (error: any) {
      setErrorApi(error.message);
      hasError = true;
    } finally {
      if (!hasError) {
        methods.reset();
      }
      setIsLoading(false);
    }
  };

  // Reset zustand store state if user have multiple account
  useEffect(() => {
    setLinks([]);
    setProfile({} as Profile);
  }, []);

  return (
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
          errorMessage="Please check again"
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
            errorMessage="Password does not match"
          />
        )}

        {!isLogin &&
          (errorApi ? (
            <S.AuthCardError>{errorApi && errorApi}</S.AuthCardError>
          ) : (
            <S.PasswordInformations
              isError={methods.formState.errors.password?.type as string}
            >
              Password must be at least 8 characters long
            </S.PasswordInformations>
          ))}

        {isLogin && <S.AuthCardError>{errorApi && errorApi}</S.AuthCardError>}

        <Button
          type="submit"
          text={isLoading ? "Loading..." : buttonLabel}
          disabled={isLoading}
        />
      </S.AuthCardForm>
    </FormProvider>
  );
}
