"use client";
import { useEffect, useState } from "react";
import { useLinks } from "../../links/_stores/links.store";
import PreviewLink from "./PreviewLink";
import * as S from "./styles";

export default function Preview() {
  const [isLoading, setIsLoading] = useState(false);
  const { links } = useLinks();

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
            <S.SkeletonImage isLoading={isLoading} />
            <S.SkeletonFullName isLoading={isLoading} />
            <S.SkeletonWebsite isLoading={isLoading} />
          </S.PreviewHeader>

          <S.PreviewLinks>
            {links.map((link, index: number) => (
              <PreviewLink key={index} link={link} isLoading={isLoading} />
            ))}

            {[...Array(5 - links.length)].map((_, index) => (
              <S.SkeletonLink as={"li"} key={index} isLoading={isLoading} />
            ))}
          </S.PreviewLinks>
        </S.PreviewResult>
      </S.IllustrationMockup>
    </S.PreviewContainer>
  );
}
