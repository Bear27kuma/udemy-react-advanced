import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Footer = () => {
  return <SFooter>&copy; 2022 Bear27kuma Inc.</SFooter>;
};

const SFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 8px 0;
  background-color: #11999e;
  color: #fff;
  text-align: center;
`;

