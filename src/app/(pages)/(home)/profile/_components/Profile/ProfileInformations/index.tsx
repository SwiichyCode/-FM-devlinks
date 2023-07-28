import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { Profile } from "../../../_stores/profil.store";
import TextField from "@/app/components/TextField";
import * as S from "./styles";

type Props = {
  profile: Profile;
  updateInput: (name: string, value: string) => void;
};

export default function ProfileInformations({ profile, updateInput }: Props) {
  const { watch } = useFormContext();

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (typeof updateInput === "function") {
        updateInput(name as string, value[name as keyof typeof value]);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <S.ProfileInformationsWrapper>
      <TextField
        name="firstName"
        labelText="First name*"
        labelTheme="secondary"
        placeholder="e.g. John"
        defaultValue={profile.firstName}
        type="text"
        isInlineFlex
        maxWidth={70}
        rules={{ required: "Can't be empty" }}
      />
      <TextField
        name="lastName"
        labelText="Last name*"
        labelTheme="secondary"
        placeholder="e.g. Appleseed"
        defaultValue={profile.lastName}
        type="text"
        isInlineFlex
        maxWidth={70}
        rules={{ required: "Can't be empty" }}
      />
      <TextField
        name="email"
        labelText="Email"
        labelTheme="secondary"
        placeholder="e.g. email@example.com"
        defaultValue={profile.email}
        type="email"
        isInlineFlex
        maxWidth={70}
      />
    </S.ProfileInformationsWrapper>
  );
}
