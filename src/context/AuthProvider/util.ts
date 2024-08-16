import { Api } from "../../services/Api/ApiConfig";
import { IUser } from "./types";
import {jwtDecode} from 'jwt-decode';

interface ITokenPayload {
  name?: string;
  email?: string;
  exp: number;
  iat: number;
}

export const decodeToken = (token: string): IUser | null => {
  try {
    return jwtDecode<ITokenPayload>(token);
  } catch (e) {
    console.error('Failed to decode token', e);
    return null;
  }
};

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem("user");

  if (!json) return null;

  const user = JSON.parse(json);

  return user ?? null;
}

export function getTokenLocalStorage() {
  const user = getUserLocalStorage();

  if (!user) {
    return null
  }
  
  const token = user.token;

  return token;
}

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await Api().post("login", { email, password });
    return request.data;
  } catch (error) {
    return null;
  }
}


