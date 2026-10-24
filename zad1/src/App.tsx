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
    <main className="container py-4">
      <section className="mb-5">
        <h2 className="mb-3">Filmy</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {movies.map((movie) => (
            <div className="col" key={movie.title}>
              <Movies
                source={movie.source}
                title={movie.title}
                releaseYear={movie.releaseYear}
                rating={movie.rating}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Filmy wydane po 2010 roku</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {moviesAfter2010.map((movie) => (
            <div className="col" key={movie.title}>
              <Movies
                source={movie.source}
                title={movie.title}
                releaseYear={movie.releaseYear}
                rating={movie.rating}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Książki</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {books.map((book) => (
            <div className="col" key={book.title}>
              <Books
                source={book.source}
                title={book.title}
                releaseYear={book.releaseYear}
                pages={book.pages}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Książki od najnowszego wydania</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {booksByReleaseYear.map((book) => (
            <div className="col" key={book.title}>
              <Books
                source={book.source}
                title={book.title}
                releaseYear={book.releaseYear}
                pages={book.pages}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Albumy</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {albums.map((album) => (
            <div className="col" key={album.title}>
              <Albums
                source={album.source}
                title={album.title}
                artist={album.artist}
                genre={album.genre}
                releaseYear={album.releaseYear}
                songs={album.songs}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h2 className="mb-3">Album z największą liczbą utworów</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          <div className="col" key={albumWithMostSongs.title}>
            <Albums
              source={albumWithMostSongs.source}
              title={albumWithMostSongs.title}
              artist={albumWithMostSongs.artist}
              genre={albumWithMostSongs.genre}
              releaseYear={albumWithMostSongs.releaseYear}
              songs={albumWithMostSongs.songs}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
