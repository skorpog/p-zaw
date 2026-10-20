interface MoviesProps {
  // Ścieżka do plakatu filmu w katalogu public.
  source: string
  // Tytuł filmu.
  title: string
  // Rok wydania filmu.
  releaseYear: number
}

function Movies({ source, title, releaseYear }: MoviesProps) {
  return (
    <article>
      <img src={source} alt={`Plakat filmu ${title}`} width="160" height="240" />
      <h3>{title}</h3>
      <p>Rok wydania: {releaseYear}</p>
    </article>
  )
}

export default Movies
