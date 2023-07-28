import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useProfile } from "../../../_stores/profil.store";
import Button from "@/app/components/Button";
import ProfilePicture from "../ProfilePicture";
import ProfileInformations from "../ProfileInformations";
import * as S from "./styles";

export default function ProfileForm() {
  const { profile, updateInput, updatePicture } = useProfile();
  const methods = useForm();

  const onsubmit: SubmitHandler<any> = (data) => {
    console.log("data", profile);
  };

  return (
    <FormProvider {...methods}>
      <S.FormWrapper onSubmit={methods.handleSubmit(onsubmit)}>
        <ProfilePicture profile={profile} updatePicture={updatePicture} />
        <ProfileInformations profile={profile} updateInput={updateInput} />
        <S.FormSave>
          <Button
            type="submit"
            text="Save"
            theme="primary"
            // disabled={links.length ? false : true}
            minContentWidth
          />
        </S.FormSave>
      </S.FormWrapper>
    </FormProvider>
  );
}
