"use client";
import { usePathname } from "next/navigation";
import { URL } from "@/app/constants/url.constant";
import LinkIcon from "/public/images/icon-link-header.svg";
import ProfileIcon from "/public/images/icon-profile-details-header.svg";
import * as S from "./styles";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <S.NavigationWrapper>
      <S.NavigationLink
        href={URL.LINKS}
        active={pathname === URL.LINKS ? true : false}
      >
        <LinkIcon />
        <span>Links</span>
      </S.NavigationLink>
      <S.NavigationLink
        href={URL.PROFILE}
        active={pathname === URL.PROFILE ? true : false}
      >
        <ProfileIcon />
        <span>Profile Details</span>
      </S.NavigationLink>
    </S.NavigationWrapper>
  );
}
