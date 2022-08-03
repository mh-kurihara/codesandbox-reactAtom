import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
//import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

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
  //  const { state } = useLocation();
  // ステートに値が入らないNULLで渡ってくる場合に以下でセット
  //  const isAdmin = state ? state.isAdmin : false;
  //  const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  };
  return (
    <SContainer>
      <h2>ユーザ一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切替</SecondaryButton>
      <SUserArea>
        {/** users.map((obj) => (
          <UserCard key={obj.id} user={obj} isAdmin={isAdmin} />
      ))*/}
        {users.map((obj) => (
          <UserCard key={obj.id} user={obj} />
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
