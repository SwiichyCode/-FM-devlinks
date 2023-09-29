"use client";

import { useSearchParams } from "next/navigation";
import * as S from "../../_components/AuthCard/styles";

export default function ConfirmPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <S.AuthFormWrapper>
      <S.AuthCard>
        <S.AuthCardHeader>
          <S.AuthCardTitle>Confirm your email</S.AuthCardTitle>
          <S.AuthCardText>
            Please confirm your registration at the following address:{" "}
            <S.AuthCardLink href={email!}>{email}</S.AuthCardLink>
          </S.AuthCardText>
        </S.AuthCardHeader>
      </S.AuthCard>
    </S.AuthFormWrapper>
  );
}
