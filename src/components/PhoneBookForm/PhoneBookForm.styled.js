import styled from '@emotion/styled';
import { IoPersonCircle } from 'react-icons/io5';
import { GiRotaryPhone } from 'react-icons/gi';

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

export const InputWrap = styled.div`
  position: relative;
`;

export const Label = styled.label`
  font-size: 20px;
  margin-left: 20px;
  color: ${p => p.theme.colors.mainText};
`;

export const Input = styled.input`
  color: #000000;
  font-weight: 400;
  width: 300px;
  height: 40px;
  padding: 3px 20px 3px 40px;
  margin-left: 5px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: inset 0px 0px 12px 0px rgba(0, 0, 0, 0.35);
  border: none;
  background: ${p => p.theme.colors.inputBg};
  font-size: ${p => p.theme.fontSizes.m};
  opacity: 0.9;
`;

export const PersonIcon = styled(IoPersonCircle)`
  position: absolute;
  top: 8px;
  left: 95px;
  height: 25px;
  width: 25px;
  z-index: 5;
`;

export const PhoneIcon = styled(GiRotaryPhone)`
  position: absolute;
  top: 8px;
  left: 100px;
  height: 25px;
  width: 25px;
  z-index: 5;
`;
