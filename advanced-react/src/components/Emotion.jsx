/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Emotion = () => {
  // ①@emotion/reactのcssを使用した記述
  const containerStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 8px;
    padding: 8px;
    border: solid 2px #392eff;
    border-radius: 20px;
  `;
  // ②Inline Styleに似た記法（@emotion/react）
  const titleStyle = css({
    margin: 0,
    color: '#3d84a8'
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>-- Emotion --</p>
      <Button>FIGHT!</Button>
    </div>
  );
};

// ③styled-componentsに似た記法（@emotion/styled）
const Button = styled.button`
  padding: 8px;
  border: none;
  border-radius: 8px;
  background-color: #abedd8;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
