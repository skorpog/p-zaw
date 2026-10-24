import Song from './Song'
import type { AlbumsProps } from '../types'

function Albums({ source, title, artist, genre, releaseYear, songs }: AlbumsProps) {
  return (
    <article>
      <img src={source} alt={`Okładka albumu ${title}`} width="240" height="240" />
      <h3>{title}</h3>
      <p>{artist} - {genre} ({releaseYear})</p>
      <h4>Utwory</h4>
      <ol>
        {songs.map((track) => (
          <li key={track.title}>
            <Song title={track.title} duration={track.duration} />
          </li>
        ))}
      </ol>
    </article>
  )
}

export default Albums
