import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthService from "@/app/(pages)/(auth)/_services/auth.service";
import TextField from "@/app/components/TextField";
import Button from "@/app/components/Button";
import * as S from "./styles";

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

export default function Form({ buttonLabel, isLogin, urlRedirection }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorApi, setErrorApi] = useState<string | null>(null);
  const methods = useForm<Inputs>();
  const router = useRouter();
  const supabase = createClientComponentClient();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    let hasError = false;
    setIsLoading(true);

    try {
      if (isLogin) {
        await supabase.auth.signInWithPassword({
          email,
          password,
        });
        router.push(urlRedirection);
        router.refresh();
      } else {
        await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${location.origin}/auth/callback`,
          },
        });

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
