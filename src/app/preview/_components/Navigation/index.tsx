import { useState } from "react";
import Button from "@/components/ui/Button";
import * as S from "./styles";

import useFetchUser from "@/app/(auth)/_hooks/useFetchUser";
import Notification from "@/components/ui/Notification";

export default function Navigation() {
  const [linkShared, setLinkShared] = useState(false);
  const { user } = useFetchUser();

  const handleBackToEditor = () => {
    window.history.back();
  };

  const handleClipboard = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_SITE_URL}/view?user=${user.id}`
    );

    setLinkShared(true);
    setTimeout(() => setLinkShared(false), 3000);
  };

  return (
    <S.NavigationWrapper>
      <Button
        text="Back to Editor"
        theme="secondary"
        maxContentWidth
        onClick={handleBackToEditor}
      />
      <Button
        text="Share link"
        theme="primary"
        maxContentWidth
        onClick={handleClipboard}
      />

      <Notification
        icon="/images/icon-link.svg"
        message="The link has been copied to your clipboard!"
        show={linkShared}
      />
    </S.NavigationWrapper>
  );
}
