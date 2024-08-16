export interface IUser {
  name?: string;
  email?: string;
  token?: string;
}

export interface IContext extends IUser {
  user: IUser | null; 
  authenticate: (email: string, passwork: string) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}