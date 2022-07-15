import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

export default function App() {
  const user = {
    name: "AAA",
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "aaa@zzz.com",
    phone: "03-1111-1111",
    company: {
      name: "A株式会社"
    }
  };
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <PrimaryButton>検索</PrimaryButton>
      <SecondaryButton>あああ</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard />
    </div>
  );
}
