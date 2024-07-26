import { createContext, ReactNode, useState } from "react";
import { UsuarioProps } from "../Types/Types";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextProps = {
  userGlobalData: UsuarioProps | null;
  setUserGlobalData: (user: UsuarioProps | null) => void;
};

const defaultValueAuthContext: AuthContextProps = {
  userGlobalData: null,
  setUserGlobalData: () => {},
};

export const AuthContext = createContext<AuthContextProps>(
  defaultValueAuthContext
);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [userGlobalData, setUserGlobalData] = useState<UsuarioProps | null>(
    null
  );
  return (
    <AuthContext.Provider value={{ userGlobalData, setUserGlobalData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
