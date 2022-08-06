import styled from 'styled-components';

export const StyledComponents = () => {
  return (
    <Container>
      <Title>-- styled-components --</Title>
      <Button>FIGHT!</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 8px;
  padding: 8px;
  border: solid 2px #392eff;
  border-radius: 20px;
`;

const Title = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const Button = styled.button`
  padding: 8px;
  border: none;
  border-radius: 8px;
  background-color: #abedd8;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
