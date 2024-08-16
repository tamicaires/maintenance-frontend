import { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { LoginRequest, getUserLocalStorage, setUserLocalStorage, decodeToken } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const user = getUserLocalStorage();
    if (user) {
      const decodedToken = decodeToken(user.token);
      if (decodedToken) {
        setUser({ ...user, ...decodedToken });
      }
    }
  }, []);

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password);

    if (!response) {
      throw new Error("Login failed");
    }

    const payload = { token: response.access_token, email };
    const decodedToken = decodeToken(response.access_token);

    if (decodedToken) {
      setUser({ ...payload, ...decodedToken });
      setUserLocalStorage({ ...payload, ...decodedToken });
    }
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};