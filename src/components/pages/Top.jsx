import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
  // ボタンを押したら画面遷移する機能
  const history = useHistory();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };
  // const onClickAdmin = () =>
  //   history.push({ pathname: "/users", state: { isAdmin: true } });
  // const onClickGeneral = () =>
  //   history.push({ pathname: "/users", state: { isAdmin: false } });

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般</SecondaryButton>
    </SContainer>
  );
};
const SContainer = styled.div`
  text-align: center;
`;
