import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import giphy from "./images/PoweredBy_200px-Black_HorizLogo.png";

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
        <h1 className="app__title">Gif App</h1>
        <AddCategory handleAddCategory={handleAddCategory} />
      </header>
      <main>
        {
          categories.map(category => (
            <GifGrid key={category} category={category} />
          ))
        }
      </main>
      <div className="copyright">
          <img src={giphy} alt="Logotipo de giphy" />
          <span>and developed by <a href="https://www.linkedin.com/in/beto-dz" target="_blank">Beto</a></span>
      </div>
    </>
  );
};
