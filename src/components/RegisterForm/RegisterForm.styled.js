import styled from '@emotion/styled';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdAlternateEmail } from 'react-icons/md';
import { IoPersonCircle } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrap = styled.div`
  position: relative;
  & + & {
    margin-top: 20px;
  }
`;

export const Label = styled.label`
  font-size: 20px;
  margin-left: 20px;
  color: ${p => p.theme.colors.mainText};
`;

export const Input = styled.input`
  color: #000000;
  font-weight: 400;
  width: 100%;
  height: 50px;
  padding: 5px 20px 5px 40px;
  margin-top: 5px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: inset 0px 0px 12px 0px rgba(0, 0, 0, 0.35);
  border: none;
  background: ${p => p.theme.colors.inputBg};
  font-size: ${p => p.theme.fontSizes.m};
  opacity: 0.9;
`;

export const PasswordIcon = styled(RiLockPasswordFill)`
  position: absolute;
  top: 40px;
  left: 10px;
  height: 25px;
  width: 25px;
  z-index: 5;
`;

export const EmailIcon = styled(MdAlternateEmail)`
  position: absolute;
  top: 40px;
  left: 10px;
  height: 25px;
  width: 25px;
  z-index: 5;
`;

export const PersonIcon = styled(IoPersonCircle)`
  position: absolute;
  top: 40px;
  left: 10px;
  height: 25px;
  width: 25px;
  z-index: 5;
`;

export const BtnWrap = styled.div`
  position: absolute;
  bottom: 60px;
  left: 130px;
  width: 109px;
  height: 42px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const NavBtn = styled(NavLink)`
  position: absolute;
  bottom: 60px;
  right: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 109px;
  height: 42px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 3px;
  text-decoration: none;
  text-transform: uppercase;
  background-color: #3f51b5;
  color: white;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;
