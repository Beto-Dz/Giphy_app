import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GitItem } from "./GitItem";

/**
 * la responsabilidad de este componente es
 * mostrar en un grid section, respresenrando la categoria
 * y una lista con las imagenes
 */

export const GifGrid = ({ category }) => {
  // estado con arreglo para almacenar las imagenes
  const [gifs, setGifs] = useState([]);

  // efecto que se ejecuta solo al montar el componente
  // hace un llamado a la funcion que
  useEffect(() => {
    getGifs(category).then(setGifs).catch(console.log);
  }, []);

  return (
    <section className="category_section">
      <h2 className="category__title">{category}</h2>
      <ul className="category__list">
        {gifs && gifs.map((gif) => <GitItem key={gif.id} {...gif} />)}
      </ul>
    </section>
  );
};
