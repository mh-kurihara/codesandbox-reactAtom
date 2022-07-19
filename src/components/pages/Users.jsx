import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom";

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
  // 画面遷移時のステートを受け渡す機能
  const { state } = useLocation();
  // ステートに値が入らないNULLで渡ってくる場合に以下でセット
  const isAdmin = state ? state.isAdmin : false;
  console.log(state);
  return (
    <SContainer>
      <h2>ユーザ一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((obj) => (
          <UserCard key={obj.id} user={obj} isAdmin={isAdmin} />
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
