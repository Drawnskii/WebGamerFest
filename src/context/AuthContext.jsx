// Importación de funciones necesarias de React
import { createContext, useEffect, useReducer } from "react";

// Importación del Reducer de Autenticación
import AuthReducer from "./AuthReducer";

// Estado inicial del contexto de autenticación
const INITIAL_STATE = {
  // El usuario actual se inicializa con el valor almacenado en el localStorage o nulo si no hay ningún valor almacenado
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

// Creación del contexto de autenticación
export const AuthContext = createContext(INITIAL_STATE);

// Proveedor de contexto de autenticación
export const AuthContextProvider = ({ children }) => {
  // Uso del hook useReducer para manejar el estado del contexto de autenticación
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // Efecto secundario para guardar el estado actual del usuario en el almacenamiento local
  useEffect(() => {
    // Se guarda el usuario actual en el localStorage en formato JSON
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]); // Se ejecuta cuando el estado del usuario cambia

  // Renderizado del proveedor de contexto
  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children} {/* Renderiza los componentes hijos */}
    </AuthContext.Provider>
  );
};
