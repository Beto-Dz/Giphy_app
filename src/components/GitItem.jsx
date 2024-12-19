/**
 * La responsabilidad de este componente es retornar un li con los datos de la imagen
 */
export const GitItem = ({ id, image, title }) => {
  return (
    <li key={id} className="category__item">
      <figure className="category__item__fig">
        <img src={image} />
        <figcaption className="category__item__caption">{title}</figcaption>
      </figure>
    </li>
  );
};
