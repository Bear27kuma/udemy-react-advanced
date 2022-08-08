import styled from 'styled-components';
import { BaseButton } from './BaseButton';

export const SecondaryButton = (props) => {
  const { children } = props;
  return (
    <Button>{children}</Button>
  );
};

const Button = styled(BaseButton)`
  background-color: #11999e;
`;
