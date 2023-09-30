import React, { useState, useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import ProfileService from "@/app/(home)/_services/profile.service";
import useFetchProfile from "@/app/(home)/_hooks/useFetchProfile";
import useFetchUser from "@/app/(auth)/_hooks/useFetchUser";
import useUserProfile from "@/app/(home)/_stores/useUserProfile";
import Button from "@/components/ui/Button";
import ProfilePicture from "../ProfilePicture";
import ProfileInformations from "../ProfileInformations";
import Notification from "@/components/ui/Notification";
import type { Profile } from "@/app/(home)/_types/profile.type";
import * as S from "./styles";

export default function ProfileForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [profileChanged, setProfileChanged] = useState(false);
  const { data, isLoading } = useFetchProfile();
  const { user } = useFetchUser();

  const {
    profile: P,
    setProfile,
    updateProfilePicture,
    updateProfilePictureFile,
  } = useUserProfile();
  const methods = useForm();

  const onSubmit: SubmitHandler<any> = async (formData) => {
    if (!profileChanged) return;

    try {
      // const { data: username, error } =
      //   await ProfileService.checkIfUsernameAlreadyExists(formData.username);

      await ProfileService.updateProfile(
        {
          username: formData.username,
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
        },
        user.id
      );

      // const { data, error } = await ProfileService.uploadProfilePicture(
      //   profile.profilePictureFile
      // );

      setProfileChanged(false);
      setFormSubmitted(true);

      setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };

  useEffect(() => {
    methods.reset({
      username: data?.username,
      firstname: data?.firstname,
      lastname: data?.lastname,
      email: data?.email,
    });
  }, [data]);

  return (
    <FormProvider {...methods}>
      <S.FormWrapper onSubmit={methods.handleSubmit(onSubmit)}>
        {/* <ProfilePicture
          profile={P}
          updateProfilePictureFile={updateProfilePictureFile}
          updateProfilePicture={updateProfilePicture}
        /> */}
        <ProfileInformations
          profileData={data as Profile}
          user={user}
          setProfileChanged={setProfileChanged}
        />
        <S.FormSave>
          <Button
            type="submit"
            text="Save"
            theme="primary"
            maxContentWidth
            disabled={!profileChanged}
          />
        </S.FormSave>

        <Notification
          icon="/images/icon-changes-saved.svg"
          message="Your changes have been succesfully saved!"
          show={formSubmitted}
        />
      </S.FormWrapper>
    </FormProvider>
  );
}
