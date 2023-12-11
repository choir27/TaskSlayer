import { createContext, useState, useEffect } from "react";
import api from "../api/api";
import { User } from "./Interface";

export const UserContext = createContext({});

export default function Context({ children }) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function getAccount() {
      const data = await api.getAccount();
      setUser(data);
    }

    if (sessionStorage.getItem("auth")) {
      getAccount();
    }
  }, []);

  const userData = user as User;

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}
