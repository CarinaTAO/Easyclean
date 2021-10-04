import React from "react";
import styled from "styled-components";

const Item = styled.div`
  margin-bottom:4px;
`;
const Label = styled.label`
  display: block;
  margin-bottom:4px;
  font-size:14px;
  text-align:left;
`;

const FormItem =(
  {
    label,
    htmlFor,
    children
  }
)=>(
  <Item>
    <Label htmlFor={htmlFor}>{label}</Label>
    {children}
  </Item>
)

export default FormItem;