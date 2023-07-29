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
  padding: 1.6rem 2.4rem;
  gap: 0.8rem;
`;

export const NotificationIcon = styled(Image)``;

export const NotificationMessage = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.4rem;
  color: #fafafa;
`;
