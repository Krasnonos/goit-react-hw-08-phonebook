import styled from '@emotion/styled';

export const Layout = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 700px;
  background-color: #000000;
  opacity: 0.3;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  border-radius: ${p => p.theme.radii.normal};
`;

export const LoginWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
  width: 700px;
  height: 500px;
  z-index: 10;
  padding: 20px;
`;

export const Tittle = styled.h1`
  text-align: center;
  color: ${p => p.theme.colors.mainText};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.4;
`;
