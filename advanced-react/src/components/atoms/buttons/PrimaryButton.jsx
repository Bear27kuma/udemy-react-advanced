import styled from 'styled-components';
import { BaseButton } from './BaseButton';

export const PrimaryButton = (props) => {
  const { children } = props;
  return (
    <Button>{children}</Button>
  );
};

const Button = styled(BaseButton)`
  background-color: #40514e;
`;
