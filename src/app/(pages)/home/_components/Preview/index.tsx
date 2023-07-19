"use client";
import { useEffect, useState } from "react";
import * as S from "./styles";

export default function Preview() {
  const [isLoading, setIsLoading] = useState(true);

  // Fake loading
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }
  }, []);

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
            {[...Array(5)].map((_, index) => (
              <S.SkeletonLink key={index} isLoading={isLoading} />
            ))}
          </S.PreviewLinks>
        </S.PreviewResult>
      </S.IllustrationMockup>
    </S.PreviewContainer>
  );
}
