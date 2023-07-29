import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import useUserProfile from "@/app/(pages)/(home)/_stores/useUserProfile";
import Button from "@/app/components/Button";
import ProfilePicture from "../ProfilePicture";
import ProfileInformations from "../ProfileInformations";
import * as S from "./styles";

export default function ProfileForm() {
  const { profile, updateProfileInformations, updateProfilePicture } =
    useUserProfile();
  const methods = useForm();

  const onsubmit: SubmitHandler<any> = (data) => {
    console.log("data", profile);
  };

  return (
    <FormProvider {...methods}>
      <S.FormWrapper onSubmit={methods.handleSubmit(onsubmit)}>
        <ProfilePicture
          profile={profile}
          updateProfilePicture={updateProfilePicture}
        />
        <ProfileInformations
          profile={profile}
          updateProfileInformations={updateProfileInformations}
        />
        <S.FormSave>
          <Button type="submit" text="Save" theme="primary" minContentWidth />
        </S.FormSave>
      </S.FormWrapper>
    </FormProvider>
  );
}
