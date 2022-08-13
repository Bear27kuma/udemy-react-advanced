import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';

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
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput/>
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
