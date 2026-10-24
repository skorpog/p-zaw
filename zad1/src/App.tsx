import Albums from './components/Albums'
import Books from './components/Books'
import Movies from './components/Movies'
import {
  albumWithMostSongs,
  albums,
  books,
  booksByReleaseYear,
  movies,
  moviesAfter2010,
} from './data'

function App() {
  return (
    <main>
      <section>
        <h2>Filmy</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.title}>
              <Movies
                source={movie.source}
                title={movie.title}
                releaseYear={movie.releaseYear}
                rating={movie.rating}
              />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Filmy wydane po 2010 roku</h2>
        <ul>
          {moviesAfter2010.map((movie) => (
            <li key={movie.title}>
              <Movies
                source={movie.source}
                title={movie.title}
                releaseYear={movie.releaseYear}
                rating={movie.rating}
              />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Książki</h2>
        <ul>
          {books.map((book) => (
            <li key={book.title}>
              <Books
                source={book.source}
                title={book.title}
                releaseYear={book.releaseYear}
                pages={book.pages}
              />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Książki od najnowszego wydania</h2>
        <ul>
          {booksByReleaseYear.map((book) => (
            <li key={book.title}>
              <Books
                source={book.source}
                title={book.title}
                releaseYear={book.releaseYear}
                pages={book.pages}
              />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Albumy</h2>
        <ul>
          {albums.map((album) => (
            <li key={album.title}>
              <Albums
                source={album.source}
                title={album.title}
                artist={album.artist}
                genre={album.genre}
                releaseYear={album.releaseYear}
                songs={album.songs}
              />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Album z największą liczbą utworów</h2>
        <ul>
          <li key={albumWithMostSongs.title}>
            <Albums
              source={albumWithMostSongs.source}
              title={albumWithMostSongs.title}
              artist={albumWithMostSongs.artist}
              genre={albumWithMostSongs.genre}
              releaseYear={albumWithMostSongs.releaseYear}
              songs={albumWithMostSongs.songs}
            />
          </li>
        </ul>
      </section>
    </main>
  )
}

export default App
