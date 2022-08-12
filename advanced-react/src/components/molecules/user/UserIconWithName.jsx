import { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../providers/UserProvider';

export const UserIconWithName = (props) => {
  const { image, name, isAdmin } = props;
  const context = useContext(UserContext);
  return (
    <SContainer>
      <SImg src={image} alt={name} width={160} height={160}/>
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const SEdit = styled.span`
  cursor: pointer;
  color: #aaa;
  text-decoration: underline;
`;
