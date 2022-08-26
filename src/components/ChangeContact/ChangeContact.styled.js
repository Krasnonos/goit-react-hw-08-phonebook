import styled from '@emotion/styled';
import { IoPersonCircle } from 'react-icons/io5';
import { GiRotaryPhone } from 'react-icons/gi';

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const InputWrap = styled.div`
  position: relative;

  & + & {
    margin-left: 25px;
  }
`;

export const Label = styled.label`
  font-size: 20px;
  color: ${p => p.theme.colors.mainText};
`;

export const Input = styled.input`
  color: #000000;
  font-weight: 400;
  width: 250px;
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
  left: 75px;
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

export const NavBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 78px;
  height: 35px;
  margin-left: auto;
  padding: 3px 9px;
  margin-right: 40px;
  border-radius: 3px;
  border: ${p => p.theme.borders.none};
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSizes.xs};
  background-color: #3f51b5;
  color: white;
  z-index: 9;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;
