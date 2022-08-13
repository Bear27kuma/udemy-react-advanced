import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';
import { SecondaryButton } from '../atoms/buttons/SecondaryButton';
import { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';

const users = [...Array(10).keys()].map((key) => {
  return {
    id: key,
    name: `Yuta-${key}`,
    image: 'https://source.unsplash.com/NE0XGVKTmcA',
    email: '1234@example.com',
    phone: '080-1111-2222',
    company: {
      name: 'あいうえお株式会社'
    },
    website: 'https://google.com'
  };
});

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput/>
      <br/>
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  text-align: center;
`;

const SUserArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  width: 100%;
  padding-top: 40px;
`;
