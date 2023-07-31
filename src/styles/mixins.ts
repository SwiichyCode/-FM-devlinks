import { css } from "styled-components";

export const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  flexColumnItems: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  flexColumnJustify: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  flexColumnCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  flexColumnBetween: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  flexAlignCenter: css`
    display: flex;
    align-items: center;
  `,

  flexJustifyCenter: css`
    display: flex;
    justify-content: center;
  `,

  buttonReset: css`
    border: none;
    background-color: transparent;
    cursor: pointer;
  `,
};
