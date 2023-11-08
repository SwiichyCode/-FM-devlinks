import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
`;

export const ProfilePictureWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-radius: var(--rounded);
  background-color: var(--grey-300);
  padding: 20px;
  gap: 16px;
`;

export const ProfilePictureTitle = styled.h2`
  width: 100%;
  max-width: 240px;
  color: var(--grey);
`;

export const ProfilePictureInputWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => !["profilePicture"].includes(prop),
})<{ profilePicture: string | undefined }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 193px;
  height: 193px;
  border-radius: var(--rounded);
  background-color: #efebff;
  background-image: ${({ profilePicture }) =>
    profilePicture ? `url(${profilePicture})` : "none"};
  background-size: cover;
  background-position: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    span {
      color: ${({ profilePicture }) =>
        profilePicture ? "var(--white)" : "#633cff"};
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export const ProfilePictureInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  border: none;
  opacity: 0;
  cursor: pointer;
`;

export const ProfilePictureInformation = styled.p.withConfig({
  shouldForwardProp: (prop) => !["errorPictureFormat"].includes(prop),
})<{ errorPictureFormat: boolean }>`
  width: 100%;
  max-width: 215px;
  font-size: 12px;
  line-height: 18px;

  color: ${({ errorPictureFormat }) =>
    errorPictureFormat ? "var(--red)" : "var(--grey)"};
`;
