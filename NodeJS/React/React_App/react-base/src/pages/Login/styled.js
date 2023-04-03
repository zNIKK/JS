import styled from "styled-components";

export const Title = styled.h1`
  background-color: blue;

  color: ${(props) => (props.isRed ? "red" : "blue")};
  small {
    font-size: 12pt;
    margin-left: 12pt;
    color: #999;
  }
`;

export const Paragrafo = styled.p`
  font-size: 80px;
`;
