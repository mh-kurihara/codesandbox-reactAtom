import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `AAA${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "aaa@zzz.com",
    phone: "03-1111-1111",
    company: {
      name: "A株式会社"
    },
    website: "https://goole.com"
  };
});

// const user = {
//   name: "AAA",
//   image: "https://source.unsplash.com/NE0XGVKTmcA",
//   email: "aaa@zzz.com",
//   phone: "03-1111-1111",
//   company: {
//     name: "A株式会社"
//   },
//   website: "https://goole.com"
// };

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザ一覧</h2>
      <SearchInput />
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
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
