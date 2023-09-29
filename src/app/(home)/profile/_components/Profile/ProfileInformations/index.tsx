import TextField from "@/components/ui/TextField";
import type { Profile } from "../../../../_types/profile.type";
import * as S from "./styles";

type Props = {
  profileData: Profile;
};

export default function ProfileInformations({ profileData }: Props) {
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
        // rules={{ required: "Can't be empty" }}
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
        // rules={{ required: "Can't be empty" }}
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
        // rules={{ required: "Can't be empty" }}
      />
      <TextField
        name="email"
        labelText="Email"
        labelTheme="secondary"
        placeholder="e.g. email@example.com"
        defaultValue={profileData?.email}
        type="email"
        isInlineFlex
        maxWidth={70}
        // rules={{ required: "Can't be empty" }}
      />
    </S.ProfileInformationsWrapper>
  );
}
