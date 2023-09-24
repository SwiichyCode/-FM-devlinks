"use client";
import { URL } from "@/constants/url.constant";
import cleanString from "@/utils/cleanString";
import * as S from "./styles";

type Props = {
  isLoading?: boolean;
  isPreviewPage?: boolean;
  link: {
    platform: string;
    url: string;
  };
};

export default function PreviewLink({
  isLoading,
  isPreviewPage = true,
  link,
}: Props) {
  const { platform, url } = link;

  return (
    <S.PreviewLinkWrapper
      as={"li"}
      isLoading={isLoading}
      name={cleanString(platform)}
      isPreviewPage={isPreviewPage}
    >
      {link && (
        <S.LinkWrapper
          href={url.length === 0 ? URL.LINKS : url}
          target="_blank"
          name={cleanString(platform)}
        >
          <S.DataWrapper>
            <S.LinkIcon
              src={`/images/preview-icon/icon-${cleanString(platform)}.svg`}
              width={20}
              height={20}
              alt=""
            />
            <S.LinkName>{platform}</S.LinkName>
          </S.DataWrapper>

          <S.ArrowRight
            src={
              cleanString(platform) === "frontendmentor"
                ? "/images/icon-arrow-right-dark.svg"
                : "/images/icon-arrow-right.svg"
            }
            width={16}
            height={16}
            alt=""
          />
        </S.LinkWrapper>
      )}
    </S.PreviewLinkWrapper>
  );
}
