// Importa las dependencias necesarias
import { createContext, useEffect, useReducer, useContext } from "react";
import { db } from "../firebase"; // Importa tu instancia de Firebase Firestore
import { doc, getDoc } from "firebase/firestore";

// Importa el contexto de autenticación
import { AuthContext } from "./AuthContext";

// Estado inicial del contexto de roles
const INITIAL_STATE = {
  isAdmin: localStorage.getItem("isAdmin") === "true", // Verifica si el usuario es administrador desde el localStorage
};

// Creación del contexto de roles
export const RoleContext = createContext(INITIAL_STATE);

// Reducer para el contexto de roles
const roleReducer = (state, action) => {
  switch (action.type) {
    case "SET_ADMIN_ROLE":
      // Actualiza el estado y el localStorage con el valor de isAdmin
      localStorage.setItem("isAdmin", action.payload);
      return { ...state, isAdmin: action.payload };
    default:
      return state;
  }
};

// Proveedor de contexto de roles
export const RoleContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(roleReducer, INITIAL_STATE);

  // Obtener el estado de autenticación del contexto
  const { currentUser } = useContext(AuthContext);

  // Función para verificar si un usuario es administrador
  const checkIfUserIsAdmin = async (userId) => {
    try {
      const docRef = doc(db, "usuarios", userId);
      const userDoc = await getDoc(docRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        return userData.esAdministrador === true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(
        "Error al verificar si el usuario es administrador:",
        error
      );
      return false;
    }
  };

  // Efecto secundario para determinar si el usuario es administrador
  useEffect(() => {
    // Verificar si hay un usuario autenticado y obtener su ID
    if (currentUser) {
      const userId = currentUser.uid;

      // Verificar si el usuario es administrador
      checkIfUserIsAdmin(userId).then((isAdmin) => {
        dispatch({ type: "SET_ADMIN_ROLE", payload: isAdmin });
      });
    }
  }, [currentUser]); // El efecto se ejecuta cada vez que currentUser cambia

  return (
    <RoleContext.Provider value={{ isAdmin: state.isAdmin }}>
      {children}
    </RoleContext.Provider>
  );
};

// Hook personalizado para acceder al contexto de roles
export const useRole = () => useContext(RoleContext);
