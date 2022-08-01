// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
// import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
// import { SearchInput } from "./components/molecules/SearchInput";
// import { UserCard } from "./components/organisms/user/UserCard";
// import { Top } from "./components/pages/Top";
// import { Users } from "./components/pages/Users";
// import { DefaultLayout } from "./components/templates/DefaultLayout";
import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";
//import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
    // Router(画面遷移)機能を使う場合は全体をBrowserRouterで囲う必要がある
    // <BrowserRouter>
    //   <DefaultLayout>
    //     <PrimaryButton>テスト</PrimaryButton>
    //     <PrimaryButton>検索</PrimaryButton>
    //     <SecondaryButton>あああ</SecondaryButton>
    //     <br />
    //     <SearchInput />
    //     <UserCard user={user} />
    //   </DefaultLayout>
    // </BrowserRouter>
  );
}
