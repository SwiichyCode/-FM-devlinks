"use client";

import cleanString from "@/app/utils/cleanString";
import * as S from "./styles";

type Props = {
  isLoading: boolean;
  link: {
    name: string;
    url: string;
  };
};

export default function PreviewLink({ isLoading, link }: Props) {
  const { name, url } = link;

  return (
    <S.PreviewLinkWrapper
      as={"li"}
      isLoading={isLoading}
      name={cleanString(name)}
    >
      {link && (
        <S.LinkWrapper href={url} name={cleanString(name)}>
          <S.DataWrapper>
            <S.LinkIcon
              src={`/images/preview-icon/icon-${cleanString(name)}.svg`}
              width={20}
              height={20}
              alt=""
            />
            <S.LinkName>{name}</S.LinkName>
          </S.DataWrapper>

          <S.ArrowRight
            src="/images/icon-arrow-right.svg"
            width={16}
            height={16}
            alt=""
          />
        </S.LinkWrapper>
      )}
    </S.PreviewLinkWrapper>
  );
}
