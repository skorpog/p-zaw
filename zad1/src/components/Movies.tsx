import type { MoviesProps } from '../types'

function Movies({ source, title, releaseYear, rating }: MoviesProps) {
  return (
    <article>
      <img src={source} alt={`Plakat filmu ${title}`} width="160" height="240" />
      <h3>{title}</h3>
      <p>Rok wydania: {releaseYear}</p>
      <p>Ocena: {rating}/10</p>
    </article>
  )
}

export default Movies
