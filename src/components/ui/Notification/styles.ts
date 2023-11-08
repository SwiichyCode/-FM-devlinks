import Image from "next/image";
import styled from "styled-components";

export const NotificationWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexAlignCenter};
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  bottom: 40px;
  border-radius: var(--rounded);
  background-color: #333;
  padding: 16px 24px;
  gap: 8px;
`;

export const NotificationIcon = styled(Image)``;

export const NotificationMessage = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #fafafa;
`;
