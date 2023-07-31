import React, { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import useUserProfile from "@/app/(home)/_stores/useUserProfile";
import Button from "@/components/Button";
import ProfilePicture from "../ProfilePicture";
import ProfileInformations from "../ProfileInformations";
import Notification from "@/app/(home)/_components/Notification";
import * as S from "./styles";

export default function ProfileForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { profile, updateProfileInformations, updateProfilePicture } =
    useUserProfile();
  const methods = useForm();

  const onsubmit: SubmitHandler<any> = (data) => {
    console.log("data", profile);

    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
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
          <Button type="submit" text="Save" theme="primary" maxContentWidth />
        </S.FormSave>

        {formSubmitted && (
          <Notification
            icon="/images/icon-changes-saved.svg"
            message="Your changes have been succesfully saved!"
          />
        )}
      </S.FormWrapper>
    </FormProvider>
  );
}
