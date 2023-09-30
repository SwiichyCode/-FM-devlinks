import TextField from "@/components/ui/TextField";
import type { Profile } from "../../../../_types/profile.type";
import * as S from "./styles";

type Props = {
  profileData: Profile;
  user: any;
  setProfileChanged: (value: boolean) => void;
};

type FormInputs = {
  username: string;
  firstname: string;
  lastname: string;
  email?: string;
};

import { useFormContext } from "react-hook-form";
import { useEffect } from "react";

export default function ProfileInformations({
  profileData,
  user,
  setProfileChanged,
}: Props) {
  const { watch } = useFormContext();

  useEffect(() => {
    const checkProfileChange = (value: FormInputs) => {
      const isEqualValue =
        value.username === profileData.username &&
        value.firstname === profileData.firstname &&
        value.lastname === profileData.lastname;

      setProfileChanged(!isEqualValue);
    };

    const subscription = watch((value) => {
      checkProfileChange(value as FormInputs);
    });

    return () => subscription.unsubscribe();
  }, [watch, profileData]);

  return (
    <S.ProfileInformationsWrapper>
      <TextField
        name="username"
        labelText="Username*"
        labelTheme="secondary"
        placeholder="e.g. johnappleseed"
        defaultValue={profileData?.username}
        type="text"
        isInlineFlex
        maxWidth={70}
        rules={{ required: "Can't be empty" }}
      />
      <TextField
        name="firstname"
        labelText="First name*"
        labelTheme="secondary"
        placeholder="e.g. John"
        defaultValue={profileData?.firstname}
        type="text"
        isInlineFlex
        maxWidth={70}
        rules={{ required: "Can't be empty" }}
      />
      <TextField
        name="lastname"
        labelText="Last name*"
        labelTheme="secondary"
        placeholder="e.g. Appleseed"
        defaultValue={profileData?.lastname}
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
        defaultValue={user?.email}
        type="email"
        isInlineFlex
        maxWidth={70}
        rules={{ required: "Can't be empty" }}
        readOnly
      />
    </S.ProfileInformationsWrapper>
  );
}
