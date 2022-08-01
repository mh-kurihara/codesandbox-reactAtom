import React, { createContext, useState } from "react";

// 他の画面から参照する値
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  // 注意としてuserInfo, setUserInfoを使用する画面は値が変わると再レンダされる
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
