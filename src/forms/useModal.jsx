import { useState } from "react";

function useModal() {
  const [showModal, setShowModal] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setShowModal(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Retorna el estado del modal y las funciones para abrir y cerrar el modal
  return {
    showModal,
    openModal,
    closeModal,
  };
}

export default useModal;
