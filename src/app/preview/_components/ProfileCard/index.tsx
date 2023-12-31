"use client";
import PreviewPicture from "@/app/(home)/_components/Preview/PreviewPicture";
import PreviewFullName from "@/app/(home)/_components/Preview/PreviewFullName";
import PreviewEmail from "@/app/(home)/_components/Preview/PreviewEmail";
import { PreviewLinks } from "@/app/(home)/_components/Preview/styles";
import PreviewLink from "@/app/(home)/_components/Preview/PreviewLink";
import * as S from "./styles";

type Props = {
  data: any;
  isLoading: boolean;
};

export default function ProfileCard({ data, isLoading }: Props) {
  const { profilePicture, firstname, lastname, email } = data;
  const { links } = data;

  return (
    <S.ProfileCardWrapper>
      <PreviewPicture picture={profilePicture} isLoading={isLoading} />

      <PreviewFullName
        firstname={firstname}
        lastname={lastname}
        isLoading={isLoading}
      />

      <PreviewEmail email={email} isLoading={isLoading} />

      <PreviewLinks isPreviewPage={true}>
        {links?.map((link: any, index: number) => (
          <PreviewLink key={index} link={link} isLoading={isLoading} />
        ))}
      </PreviewLinks>
    </S.ProfileCardWrapper>
  );
}
