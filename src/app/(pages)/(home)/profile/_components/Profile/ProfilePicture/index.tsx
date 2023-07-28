import React, { useEffect, useState } from "react";
import Image from "next/image";
import * as S from "./styles";
import { Profile } from "../../../_stores/profil.store";

type Props = {
  profile: Profile;
  updatePicture: (picture: string) => void;
};

export default function ProfilePicture({ profile, updatePicture }: Props) {
  const [profilePicture, setProfilePicture] = useState<string | null>(
    profile.profilPicture
  );

  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const imageBase64 = reader.result as string;
        setProfilePicture(imageBase64);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (typeof updatePicture === "function") {
      updatePicture(profilePicture as string);
    }
  }, [profilePicture]);

  return (
    <S.ProfilePictureWrapper>
      <S.ProfilePictureTitle>Profile picture</S.ProfilePictureTitle>
      <S.ProfilePictureInputWrapper profilePicture={profilePicture}>
        <div>
          <Image
            src={
              profilePicture
                ? "/images/icon-upload-image-light.svg"
                : "/images/icon-upload-image.svg"
            }
            width={40}
            height={40}
            alt=""
          />
          <span>{profilePicture ? "Change Images" : "+ Upload Image"}</span>
        </div>
        <S.ProfilePictureInput
          type="file"
          name="profilPicture"
          onChange={handlePictureChange}
        />
      </S.ProfilePictureInputWrapper>
      <S.ProfilePictureInformation>
        Image must be below 1024x1024px. Use PNG or JPG format.
      </S.ProfilePictureInformation>
    </S.ProfilePictureWrapper>
  );
}
