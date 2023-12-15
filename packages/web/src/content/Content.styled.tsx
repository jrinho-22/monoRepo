import styled from 'styled-components';

export const Background = styled.div`
  background-image: url("https://colorlib.com/etc/lf/Login_v5/images/bg-01.jpg");
  background-position: center;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
`;

export const Container = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  width: 25%;
  display: flex;
  padding: 25px 10px 55px;
  justify-content: center;
  transform: translate(-50%);
  background-color: white;
`;