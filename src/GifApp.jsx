import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {
  // estado para mantener las categorias de las imagenes
  const [categories, setCategories] = useState(["rick and morty"]);

  // funcion para agregar una nueva categoria al estado
  const handleAddCategory = (category) => {
    // al estado, envia un arreglo, el cual es la combinación de
    // el propio categories esparcido
    // y adicionalmente se agrega el nuevo elemento
    // setCategories([...categories, category]);
    if (!categories.includes(category)) {
      setCategories([category, ...categories]);
    }
  };

  return (
    <>
      <header>
        <h1>Giphy: Gif App</h1>
        <AddCategory handleAddCategory={handleAddCategory} />
      </header>
      <main>
        {
          categories.map(category => (
            <GifGrid key={category} category={category} />
          ))
        }
      </main>
    </>
  );
};
