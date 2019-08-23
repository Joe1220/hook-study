import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled("button")`
  width: 100%;
  height: 100%;
  color: white;
  background: blue;
  padding: 10px;
  box-sizing: border-box;
  border: none;
  text-align: left;
`;

Button.prototype = {
  onClick: PropTypes.func.isRequired
};

export default Button;
