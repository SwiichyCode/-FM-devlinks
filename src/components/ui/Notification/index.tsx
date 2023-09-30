import * as S from "./styles";

type Props = {
  icon: string;
  message: string;
  show: boolean;
};

export default function Notification({ icon, message, show }: Props) {
  return (
    show && (
      <S.NotificationWrapper>
        <S.NotificationIcon
          src={icon}
          width={20}
          height={20}
          alt="notification icon"
        />
        <S.NotificationMessage>{message}</S.NotificationMessage>
      </S.NotificationWrapper>
    )
  );
}
