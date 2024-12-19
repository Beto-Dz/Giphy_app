export const getGifs = async (category) => {
  // constante donde se almacena la respuesta del fetch
  const response = await fetch(
    `${import.meta.env.VITE_GIPHY_ENDPOINT_BASE}api_key=${
      import.meta.env.VITE_API_KEY
    }&q=${category}&limit=10`
  );

  // constante donde se desestructura la data de la respuesta
  const { data } = await response.json();

  // retorna una copia de data (array), desestructurando cada objeto
  // en su id, titulo y url de imagen
  return data.map(({ id, title, images }) => ({
    id,
    title,
    image: images.downsized_medium.url,
  }));

  // lo de arriba es el resumen de est:
  // return data.map(( imagenInfo ) => ({
  //   id: imagenInfo.id,
  //   title: imagenInfo.title,
  //   image: imagenInfo.images.downsized_medium.url,
  // }));
};
