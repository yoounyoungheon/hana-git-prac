import { useCallback } from "react";
import { useSession } from "../context-api/SessionContext"
import { Login } from "./Login";

export const LoginWrapper: React.FC = ()=>{
  const { login } = useSession();
  // Login Caching
  const memoizedLogin = useCallback(
    (id: number, name: string) => login(id, name),
    [login]
  );

  return <Login login = {memoizedLogin}/>;
}

