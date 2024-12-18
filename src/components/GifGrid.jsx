export const GifGrid = ({ category }) => {
  const gifs = [1, 3, 5, 6, 7, 3, 8];

  return (
    <section className="category_section">
      <h2 className="category__title">{category}</h2>
      <ul className="category__list">
        {
            gifs.map((gif) => (
              <li key={gif} className="category__item">gif</li>
            ))
        }
      </ul>
    </section>
  );
};
