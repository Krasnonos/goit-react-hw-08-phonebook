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
  padding: 0px 40px 40px 40px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 77px;
`;
