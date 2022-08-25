import styled from '@emotion/styled';

export const Backdrop = styled.li`
  position: relative;
  width: 900px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  & + & {
    margin-top: 15px;
  }
`;

export const Item = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  z-index: 9;
`;
export const Layout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.colors.secondBg};
  border-radius: ${p => p.theme.radii.normal};
`;

export const DescrWrap = styled.div`
  display: flex;
  align-items: center;
  min-width: 330px;

  & + & {
    margin-left: 40px;
  }
`;

export const Information = styled.p`
  margin-left: 5px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.mainText};
`;

export const BtnWrap = styled.div`
  margin-left: auto;
`;
