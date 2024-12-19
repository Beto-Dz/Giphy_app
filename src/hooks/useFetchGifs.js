import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

/**
 * la responsabilidad de este hook, es crear un estado para almacenar las imagenes,
 * y el estado de la peticion,
 */
export const useFetchGifs = (category) => {
  // estado pora las imagenes y el estado de la peticion
  const [fetchInfo, setFetchInfo] = useState({ images: [], isLoading: true });

  const getImages = async () => {
    // uso de la funcion que hace la peticion http
    const newImages = await getGifs(category);

    // cambiamos el estado
    setFetchInfo({ images: newImages, isLoading: false });
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    ...fetchInfo,
  };
};
