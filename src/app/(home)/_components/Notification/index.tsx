import * as S from "./styles";

type Props = {
  icon: string;
  message: string;
};

export default function Notification({ icon, message }: Props) {
  return (
    <S.NotificationWrapper>
      <S.NotificationIcon
        src={icon}
        width={20}
        height={20}
        alt="notification icon"
      />
      <S.NotificationMessage>{message}</S.NotificationMessage>
    </S.NotificationWrapper>
  );
}
