import styled from '@emotion/styled';
import { FiFilter } from 'react-icons/fi';

export const InputWrap = styled.div`
  position: relative;
  width: 360px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-size: 20px;
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

export const FilterIcon = styled(FiFilter)`
  position: absolute;
  top: 8px;
  left: 67px;
  height: 25px;
  width: 25px;
  z-index: 5;
`;
