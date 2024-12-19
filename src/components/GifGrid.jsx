import { GitItem } from "./GitItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { Loader } from "./loader/Loader";

/**
 * la responsabilidad de este componente es
 * mostrar en un grid section, respresenrando la categoria
 * y una lista con las imagenes
 */

export const GifGrid = ({ category }) => {
  // us =o de custom hook
  const { images: gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      {(isLoading && <Loader />) || (
        <section className="category_section">
          <h2 className="category__title">{category}</h2>
          <ul className="category__list">
            {gifs && gifs.map((gif) => <GitItem key={gif.id} {...gif} />)}
          </ul>
        </section>
      )}
    </>
  );
};
