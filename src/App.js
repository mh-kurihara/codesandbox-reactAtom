import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";

export default function App() {
  const user = {
    name: "AAA",
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "aaa@zzz.com",
    phone: "03-1111-1111",
    company: {
      name: "A株式会社"
    },
    website: "https://goole.com"
  };
  return (
    // Router(画面遷移)機能を使う場合は全体をBrowserRouterで囲う必要がある
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <PrimaryButton>検索</PrimaryButton>
        <SecondaryButton>あああ</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
