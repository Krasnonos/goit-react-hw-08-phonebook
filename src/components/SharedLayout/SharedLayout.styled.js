import styled from '@emotion/styled';

export const Layout = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background: ${p => p.theme.colors.background};
`;

export const Container = styled.div`
  width: 1200px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 40px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 42px;
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
