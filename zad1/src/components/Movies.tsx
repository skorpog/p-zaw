import type { MoviesProps } from '../types'

function Movies({ source, title, releaseYear, rating }: MoviesProps) {
  return (
    <article className="card h-100" 
    onClick={() => console.log(`Wybrano film ${title}`)}
    >
      <img
        className="card-img-top"
        src={source}
        alt={`Plakat filmu ${title}`}
        width="160"
        height="240"
      />
      <div className="card-body">
        <h3 className="card-title h5">{title}</h3>
        {rating >= 8 && (
          <span className="badge text-bg-success mb-2">Polecany</span>
        )}
        <p className="card-text">Rok wydania: {releaseYear}</p>
        <p className="card-text">Ocena: {rating}/10</p>
        <button 
        className="btn btn-primary mb-2"
        onClick={(event) => {
          event.stopPropagation();
          console.log(`Pokaż szcególy dla ${title}`)}}
        >Pokaż szczegóły</button>
      </div>
    </article>
  )
}

export default Movies
