import { createContext } from 'react';

import type { User } from '@/shared/types/user';

interface AuthState {
  isAuth: boolean;
  user?: User;
}

interface AuthFunctions {
  clearUser: () => void;
  setIsAuth: (isAuth: boolean) => void;
  setUser: (user: User) => void;
}

export interface AuthContextProps {
  authFunctions: AuthFunctions;
  authState: AuthState;
}

export const AuthContext = createContext<AuthContextProps>({
  authState: {
    isAuth: false,
    user: undefined
  },
  authFunctions: {
    setIsAuth: () => {},
    setUser: () => {},
    clearUser: () => {}
  }
});
