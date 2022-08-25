import styled from '@emotion/styled';

export const Tittle = styled.h1`
  margin: 0px;
  margin-bottom: 15px;
  text-align: center;
  color: ${p => p.theme.colors.mainText};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.4;
`;

export const NavBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 42px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 3px;
  border: ${p => p.theme.borders.none};
  text-decoration: none;
  text-transform: uppercase;
  background-color: #3f51b5;
  color: white;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;
