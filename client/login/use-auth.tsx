import * as React from 'react';
import { createContext, useContext, useState } from 'react';
import { TOKEN_SESSION_KEY } from '../../shared/constants';
import { getCookie } from '../helpers/cookie-helper';

const authContext = createContext(null);

export function ProvideAuth({ children }: any) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState<string>(getCookie(TOKEN_SESSION_KEY));

  // const signin = (user: GoogleLoginResponse) => {
  const signin = (user: string) => {
    setUser(user);
  };

  const signout = () => {
    setUser(null);
  };

  return { user, signin, signout };
}
