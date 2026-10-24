import type { AlbumsProps } from '../types'

function Albums({ source, title, artist, genre, releaseYear, songs }: AlbumsProps) {
  let songsContent

  if (songs.length === 0) {
    songsContent = (
      <div className="alert alert-info mb-0" role="alert">
        Brak utworów w tym albumie.
      </div>
    )
  } else {
    songsContent = (
      <div className="table-responsive">
        <table className="table table-striped table-hover mb-0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tytuł</th>
              <th scope="col" className="text-end">Czas trwania</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((track, index) => (
              <tr key={track.title}>
                <th scope="row">{index + 1}</th>
                <td>{track.title}</td>
                <td className="text-end text-nowrap">{track.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <article className="card h-100">
      <img
        className="card-img-top"
        src={source}
        alt={`Okładka albumu ${title}`}
        width="240"
        height="240"
      />
      <div className="card-body">
        <h3 className="card-title h5">{title}</h3>
        <p className="card-text">{artist} - {genre} ({releaseYear})</p>
        <h4 className="h6">Utwory</h4>
        {songsContent}
      </div>
    </article>
  )
}

export default Albums
