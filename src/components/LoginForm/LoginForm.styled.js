import styled from '@emotion/styled';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdAlternateEmail } from 'react-icons/md';

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
  font-size: 25px;
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
  top: 46px;
  left: 10px;
  height: 25px;
  width: 25px;
  z-index: 5;
`;

export const EmailIcon = styled(MdAlternateEmail)`
  position: absolute;
  top: 46px;
  left: 10px;
  height: 25px;
  width: 25px;
  z-index: 5;
`;
