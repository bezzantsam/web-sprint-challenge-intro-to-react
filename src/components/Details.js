import React from "react";
import styled from "styled-components";

const OutsideContainer = styled.div`
  border: 1px solid rgb (210, 210, 210);
  background-color: rgb (255, 255, 255, 0.3);
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  border-radius: 3px;
  padding: 16px 8px 12px 8px;
`;

const H2 = styled.h2`
  color: black;
  text-shadow: 1px 1px yellow;
  text-transform: uppercase;
`;

const Button = styled.button`
  box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
  border-radius: 8px;
  background-color: grey;
  padding: 8px 18px;
  font-size: 1.2 rem;
  cursor: pointer;
`;

const Span = styled.span`
  color: white;
  text-shadow: 3px 3px #ff0000;
`;

export default Details;
