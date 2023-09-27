"use client";
import useUserProfile from "@/app/(home)/_stores/useUserProfile";
import PreviewPicture from "@/app/(home)/_components/Preview/PreviewPicture";
import PreviewFullName from "@/app/(home)/_components/Preview/PreviewFullName";
import PreviewEmail from "@/app/(home)/_components/Preview/PreviewEmail";
import { PreviewLinks } from "@/app/(home)/_components/Preview/styles";
import PreviewLink from "@/app/(home)/_components/Preview/PreviewLink";
import * as S from "./styles";

export default function ProfileCard() {
  const { links, profile } = useUserProfile();
  const { profilePicture, firstname, lastname, email } = profile;

  return (
    <S.ProfileCardWrapper>
      <PreviewPicture picture={profilePicture} />
      <PreviewFullName firstname={firstname} lastname={lastname} />
      <PreviewEmail email={email} />
      <PreviewLinks isPreviewPage={true}>
        {links.map((link, index: number) => (
          <PreviewLink key={index} link={link} />
        ))}
      </PreviewLinks>
    </S.ProfileCardWrapper>
  );
}
