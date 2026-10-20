import Song from './Song'

interface Track {
  // Tytuł utworu.
  title: string
  // Czas trwania w formacie minuty:sekundy.
  duration: string
}

interface AlbumsProps {
  // Ścieżka do okładki albumu w katalogu public.
  source: string
  // Tytuł albumu.
  title: string
  // Nazwa wykonawcy lub zespołu.
  artist: string
  // Gatunek muzyczny albumu.
  genre: string
  // Rok wydania albumu.
  releaseYear: number
  // Lista utworów znajdujących się na albumie.
  songs: Track[]
}

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
