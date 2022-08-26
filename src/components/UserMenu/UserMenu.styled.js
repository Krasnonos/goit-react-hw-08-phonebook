import styled from '@emotion/styled';

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthTittle = styled.p`
  margin-right: 20px;
  padding: 5px 10px;
  color: ${p => p.theme.colors.mainText};
  font-size: ${p => p.theme.fontSizes.m};
  border: 2px solid ${p => p.theme.colors.mainText};
  border-radius: 20px;
`;

export const UserName = styled.span`
  font-weight: 800;
  text-transform: uppercase;
`;

export const NavBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 42px;
  border-radius: 5px;
  border: ${p => p.theme.borders.none};
  text-decoration: none;
  text-transform: uppercase;
  background-color: #3f51b5;
  color: white;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;
