import React, { createContext, useContext, useState } from "react";

// Cria o contexto do estado global
export const AppStateContext = createContext();

// Provedor do estado global
export function AppStateProvider({ children }) {
  const [globalState, setGlobalState] = useState({
    CTA: false,
    Cadastro: false,
    Confirmacao: false,
    Cadastrado: false
  });

  return (
    <AppStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  return useContext(AppStateContext);
}
