import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: flex;
  justify-content: space-between;
  margin: 0 25px 0 25px;
  height: 77px;
  border-top: 2px solid #f5f7fa;
`;

export const LogoWrapper = styled.div`
  display: flex;
  pointer-events: none;
`;

export const Logo = styled.div`
  align-self: center;
`;

export const Copy = styled.div`
  font-size: 12px;
  text-align: left;
  align-self: center;
  margin: 0 0 0 10px;
`;
