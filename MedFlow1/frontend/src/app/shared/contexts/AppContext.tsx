import React, { createContext, ReactNode, useState } from 'react';

type Usuario = {
  userName: string;
  idUser: number;
  token: string;
  typeUser: string;
};

type AppContextData = {
  usuario: Usuario | undefined;
  logado: boolean;
  logar: (email: string, password: string) => Promise<string | null>;
  deslogar: () => void;
};

type AppProviderData = {
  children: ReactNode;
};

export const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider = ({ children }: AppProviderData) => {
  const [usuario, setUsuario] = useState<Usuario>();

  const logado = Boolean(usuario);

  const logar = async (email: string, senha: string) => {
    alert("Chamou a função logar");
    return null;
  };

  const deslogar = () => {
    alert("Você foi desconectado");
  };

  return (
    <AppContext.Provider value={{ logar, deslogar, logado, usuario }}>
      {children}
    </AppContext.Provider>
  );
};
