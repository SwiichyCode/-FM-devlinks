"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import useUserProfile from "@/app/(home)/_stores/useUserProfile";
import { URL } from "@/constants/url.constant";
import PreviewPicture from "./PreviewPicture";
import PreviewLink from "./PreviewLink";
import PreviewFullName from "./PreviewFullName";
import PreviewEmail from "./PreviewEmail";
import * as S from "./styles";

export default function Preview() {
  const [isLoading, setIsLoading] = useState(false);
  const { links, profile } = useUserProfile();
  const { profilePicture, firstname, lastname, email } = profile;
  const pathnames = usePathname();

  // Fake loading
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }
  }, [isLoading]);

  return (
    <S.PreviewContainer>
      <S.IllustrationMockup>
        <S.PreviewResult>
          <S.PreviewHeader>
            {profilePicture ? (
              <PreviewPicture picture={profilePicture} isLoading={isLoading} />
            ) : (
              <S.SkeletonPicture isLoading={isLoading} />
            )}

            {firstname && lastname ? (
              <PreviewFullName
                firstname={firstname}
                lastname={lastname}
                isLoading={isLoading}
              />
            ) : (
              <S.SkeletonFullName isLoading={isLoading} />
            )}

            {email ? (
              <PreviewEmail email={email} isLoading={isLoading} />
            ) : (
              <S.SkeletonEmail isLoading={isLoading} />
            )}
          </S.PreviewHeader>

          <S.PreviewLinks>
            {links.map((link, index: number) => (
              <PreviewLink key={index} link={link} isLoading={isLoading} />
            ))}

            {pathnames === URL.LINKS &&
              [...Array(5 - links.length)].map((_, index) => (
                <S.SkeletonLink as={"li"} key={index} isLoading={isLoading} />
              ))}
          </S.PreviewLinks>
        </S.PreviewResult>
      </S.IllustrationMockup>
    </S.PreviewContainer>
  );
}
