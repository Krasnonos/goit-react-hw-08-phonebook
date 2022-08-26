import styled from '@emotion/styled';

export const Backdrop = styled.li`
  width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  background-color: ${p => p.theme.colors.secondBg};
  border-radius: ${p => p.theme.radii.normal};
  & + & {
    margin-top: 15px;
  }
`;

export const Inform = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
`;

export const NameWrap = styled.div`
  display: flex;
  align-items: center;
  min-width: 330px;
`;

export const PhoneWrap = styled.div`
  display: flex;
  align-items: center;
  min-width: 230px;
  margin-left: 35px;
`;

export const InformTittle = styled.p`
  margin: 0px;
  margin-left: 5px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.mainText};
`;

export const Text = styled.p`
  margin: 0px;
  margin-left: 10px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: 800;
  color: ${p => p.theme.colors.mainText};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  width: 170px;
  height: 35px;
`;
