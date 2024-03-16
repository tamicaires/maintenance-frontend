import { useAuth } from "../../context/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element}) => {
  const auth = useAuth();

  if(!auth.email) return <h1> Access Denied</h1>

  return children;
}; 