import Albums from './components/Albums'
import Books from './components/Books'
import CollapsibleSection from './components/CollapsibleSection'
import Movies from './components/Movies'
import {useState} from 'react'
import {
  albumWithMostSongs,
  albums,
  books,
  booksByReleaseYear,
  movies,
  moviesAfter2010,
} from './data'

function App() {
  const[moviesearch, setmoviesearch] = useState('')
  const[booksearch, setbooksearch] = useState('')
  const[albumsearch, setalbumsearch] = useState('')

  const filteredmovies = movies.filter((movie) =>
  movie.title.toLowerCase().includes(moviesearch.toLowerCase()))
  return (
    <main className="container py-4">

      <input
        type="text"
        className="form-control"
        placeholder="Wpisz tytuł"
        value = {moviesearch}
        onChange ={(event) => {
          setmoviesearch(event.target.value)
          console.log(event.target.value)
        }}
      />
      <p>Wpisany tekst: {moviesearch}</p>
      <CollapsibleSection title="Filmy">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
          {filteredmovies.map((movie) => (
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
        {filteredmovies.length === 0 && (
          <p className="mt-3">Nie znaleziono filmów</p>
        )}
      </CollapsibleSection>

      <CollapsibleSection title="Filmy wydane po 2010 roku">
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
      </CollapsibleSection>
  
      <input
        type="text"
        className="form-control"
        placeholder="Wpisz tytuł"
        value = {booksearch}
        onChange ={(event) => {
          setbooksearch(event.target.value)
          console.log(event.target.value)
        }}
      />
      <p>Wpisany tekst: {booksearch}</p>
      <CollapsibleSection title="Książki">
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
      </CollapsibleSection>

      <CollapsibleSection title="Książki od najnowszego wydania">
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
      </CollapsibleSection>
        <input
          type="text"
          className="form-control"
          placeholder="Wpisz tytuł"
          value = {albumsearch}
          onChange ={(event) => {
            setalbumsearch(event.target.value)
            console.log(event.target.value)
          }}
        />
        <p>Wpisany tekst: {albumsearch}</p>
      <CollapsibleSection title="Albumy">
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
      </CollapsibleSection>

      <CollapsibleSection title="Album z największą liczbą utworów">
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
      </CollapsibleSection>
    </main>
  )

}

export default App
