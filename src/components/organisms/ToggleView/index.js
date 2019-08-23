import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../../atoms/Button";

const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled("div")`
  position: relative;
  height: 0;
  opacity: 0;
  overflow: hidden;
  margin-top: 10px;

  flex-direction: column;
  align-items: center;

  ${props =>
    props.visible
      ? css`
          height: ${props.height}px;
          opacity: 1;
          transition: height 0.1s ease-out, opacity 1s ease-out;
        `
      : css`
          height: 0;
          opacity: 0;
          transition: height 0.1s ease-out, opacity 1s ease-out;
        `}
`;

const ToggleView = ({ height, children }) => {
  const [visible, setVisible] = useState(false);
  const toggleViewEvent = () => {
    setVisible(!visible);
  };
  return (
    <Wrapper>
      <Button onClick={toggleViewEvent}>What's that?</Button>
      <Content height={height} visible={visible}>
        {children}
      </Content>
    </Wrapper>
  );
};

export default ToggleView;
