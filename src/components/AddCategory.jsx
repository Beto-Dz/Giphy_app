import { useState } from "react";

/**
 * La unica responsabilidad de este componente es
 * mostrar un input y emitir su value
 */

export const AddCategory = ({ handleAddCategory }) => {
  // estado para manejar el contenido del input
  const [inputContent, setInputContent] = useState("");

  // funcion para manejar el cambio del input
  const handleOnChangeInput = ({ target }) => {
    setInputContent(target.value);
  };

  // funcion para manejar el envio del formulario
  const handleOnSubmit = (e) => {
    // previene el comportamiento por default
    e.preventDefault();

    const category = inputContent.trim();

    // valida el minimo de 3 caracteres
    if (category.length >= 3) {
      handleAddCategory(category.toLocaleLowerCase());
      setInputContent("");
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Busca una categoría de imagenes..."
        value={inputContent}
        onChange={handleOnChangeInput}
        required
        minLength={3}
      />
    </form>
  );
};
