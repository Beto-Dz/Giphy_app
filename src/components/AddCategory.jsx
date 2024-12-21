import { useEffect, useRef, useState } from "react";

/**
 * La unica responsabilidad de este componente es
 * mostrar un input y emitir su value
 */

export const AddCategory = ({ handleAddCategory }) => {
  // estado para manejar el contenido del input
  const [inputContent, setInputContent] = useState("");

  // estado para manejar un mensaje de error del input
  const [errorMessage, setErrorMessage] = useState("");

  // funcion para manejar el cambio del input
  const handleOnChangeInput = ({ target }) => {
    setInputContent(target.value);
  };

  const handleOnPaste = (e) => {
    e.preventDefault();
    setInputContent(e.clipboardData.getData("text"));
    refForm.current.isFirstSearch = false;
  };

  // ref para saber si es la primer busqueda del usuario y si esta listo para ser enviado
  const refForm = useRef({ isFirstSearch: true, isReadyToSend: false });

  // efecto para evaluar el mensaje de error a partir del contenido del input y si esta listo para enviarse al server
  useEffect(() => {
    // evaluar si es la primera busqueda
    if (refForm.current.isFirstSearch) {
      refForm.current.isFirstSearch = inputContent === "";
      return;
    }

    // si el valor del input tiene menos de 3 caracteres
    if (inputContent.trim().length < 3) {
      setErrorMessage("La busqueda mínima es de 3 caracteres");
      refForm.current.isReadyToSend = false;
      return;
    }

    // si el valor del input tiene caracteres especiales
    if (!/^[a-zA-Z0-9 ]+$/.test(inputContent)) {
      setErrorMessage("No se permiten busquedas con caracteres especiales");
      refForm.current.isReadyToSend = false;
      return;
    }

    // cambio de mensaje de error cuando pasa todos los filtros
    setErrorMessage(null);
    // cambio ref cuando pasa todos los filtros
    refForm.current.isReadyToSend = true;
  }, [inputContent]);

  // funcion para manejar el envio del formulario
  const handleOnSubmit = (e) => {
    // previene el comportamiento por default
    e.preventDefault();

    // si no esta listo para ser enviado, retornamos
    if (!refForm.current.isReadyToSend) return;

    const category = inputContent.trim();

    handleAddCategory(category.toLocaleLowerCase());
    setInputContent("");
    
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" value={inputContent} onChange={handleOnChangeInput} onPaste={handleOnPaste} minLength={3} placeholder="Busca una categoría de imagenes..." required />
      <span> { errorMessage } </span>
    </form>
  );
};
