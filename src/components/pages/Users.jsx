import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((value) => {
  return {
    id: value,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    name: `田中太郎 ${value}`,
    email: "aaa@bbb.com",
    tel: "0312345678",
    company: {
      name: "テスト会社"
    },
    website: "https://google.com/"
  };
});

export const Users = () => {
  return (
    <StyledContainer>
      <h2>ユーザ一覧</h2>
      <SearchInput />
      <StyledUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </StyledUserArea>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const StyledUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
