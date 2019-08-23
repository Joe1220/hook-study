import PropTypes from "prop-types";
import styled, { keyframes, css } from "styled-components";

const animation = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

const Img = styled("img")`
  animation: ${animation} 20s linear infinite;
  ${props =>
    props.size &&
    css`
      width: ${props => props.size};
      height: ${props => props.size};
    `}
`;

Img.prototype = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.number
};

export default Img;
