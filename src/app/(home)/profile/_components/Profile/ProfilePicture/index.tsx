import { useEffect, useState } from "react";
import Image from "next/image";
import type { Profile } from "@/app/(home)/_types/profile.type";
import * as S from "./styles";

type Props = {
  profile: Profile;
  updateProfilePicture: (picture: string) => void;
  updateProfilePictureFile: (file: any) => void;
};

export default function ProfilePicture({
  profile,
  updateProfilePicture,
  updateProfilePictureFile,
}: Props) {
  const [profilePicture, setProfilePicture] = useState<string | undefined>(
    profile.profilePicture
  );
  const [profilePictureFile, setProfilePictureFile] = useState<any>(
    profile.profilePictureFile
  );

  const [errorPictureFormat, setErrorPictureFormat] = useState(false);

  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const imageBase64 = reader.result as string;
        setProfilePicture(imageBase64);
      };
      reader.readAsDataURL(e.target.files[0]);
    }

    let file;

    if (e.target.files) {
      file = e.target.files[0];

      setProfilePictureFile(file);
    }
  };

  useEffect(() => {
    if (
      profilePicture &&
      !profilePicture?.match(/data:image\/(png|jpg|jpeg);base64,/)
    ) {
      setErrorPictureFormat(true);
      return;
    }

    if (typeof updateProfilePicture === "function") {
      setErrorPictureFormat(false);

      updateProfilePicture(profilePicture as string);
      updateProfilePictureFile(profilePictureFile);
    }
  }, [profilePictureFile, profilePicture]);

  return (
    <S.ProfilePictureWrapper>
      <S.ProfilePictureTitle>Profile picture</S.ProfilePictureTitle>
      <S.Wrapper>
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
        <S.ProfilePictureInformation errorPictureFormat={errorPictureFormat}>
          Image must be below 1024x1024px. Use PNG or JPG format.
        </S.ProfilePictureInformation>
      </S.Wrapper>
    </S.ProfilePictureWrapper>
  );
}
