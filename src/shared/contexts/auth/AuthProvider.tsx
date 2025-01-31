import { Loader } from '@mantine/core';
import { useCallback, useEffect, useMemo, useState } from 'react';

import type { User } from '@/shared/types/user';

import { useGetSessionQuery } from '@/shared/api/hooks/useGetSessionQuery';
import { LOCAL_STORAGE_AUTH_TOKEN } from '@/shared/consts/localstorage';

import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN));
  const { data: session, isLoading } = useGetSessionQuery();

  const clearUser = useCallback(() => {
    setUser(undefined);
    setIsAuth(false);
    localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (session && session.data.user) {
        setUser(session.data.user);
        setIsAuth(true);
      } else {
        clearUser();
      }
    }
  }, [session, isLoading, clearUser]);

  const contextValue = useMemo(
    () => ({
      authState: { isAuth, user },
      authFunctions: { setIsAuth, setUser, clearUser }
    }),
    [isAuth, user, clearUser]
  );

  if (isLoading) return <Loader />;

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
