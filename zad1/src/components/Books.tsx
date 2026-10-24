import type { BooksProps } from '../types'

function Books({ source, title, releaseYear, pages }: BooksProps) {
  return (
    <article className="card h-100">
      <img
        className="card-img-top"
        src={source}
        alt={`Okładka książki ${title}`}
        width="160"
        height="240"
      />
      <div className="card-body">
        <h3 className="card-title h5">{title}</h3>
        <p className="card-text">Rok wydania: {releaseYear}</p>
        <p className="card-text">Liczba stron: {pages}</p>
      </div>
    </article>
  )
}

export default Books
