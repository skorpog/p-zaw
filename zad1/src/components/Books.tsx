import type { BooksProps } from '../types'

function Books({ source, title, releaseYear, pages }: BooksProps) {
  return (
    <article>
      <img src={source} alt={`Okładka książki ${title}`} width="160" height="240" />
      <h3>{title}</h3>
      <p>Rok wydania: {releaseYear}</p>
      <p>Liczba stron: {pages}</p>
    </article>
  )
}

export default Books
