import Albums from './components/Albums'
import Books from './components/Books'
import Movies from './components/Movies'

type Movie = {
  source: string
  title: string
  releaseYear: number
}

type Book = {
  source: string
  title: string
  releaseYear: number
  pages: number
}

type Track = {
  title: string
  duration: string
}

type Album = {
  source: string
  title: string
  artist: string
  genre: string
  releaseYear: number
  songs: Track[]
}

const movies: Movie[] = [
  { source: '/movies/inception.jpg', title: 'Incepcja', releaseYear: 2010 },
  { source: '/movies/the_matrix.jpg', title: 'Matrix', releaseYear: 1999 },
  { source: '/movies/the_lord_of_the_rings.jpg', title: 'Władca Pierścieni: Drużyna Pierścienia', releaseYear: 2001 },
]

const books: Book[] = [
  { source: '/books/dune.jpg', title: 'Diuna', releaseYear: 1965, pages: 688 },
  { source: '/books/the_hobbit.jpg', title: 'Hobbit', releaseYear: 1937, pages: 320 },
  { source: '/books/the_little_prince.jpg', title: 'Mały Książę', releaseYear: 1943, pages: 112 },
]

const albums: Album[] = [
  {
    source: '/albums/master_of_puppets.jpg',
    title: 'Master of Puppets',
    artist: 'Metallica',
    genre: 'Thrash metal',
    releaseYear: 1986,
    songs: [
      { title: 'Battery', duration: '5:13' },
      { title: 'Master of Puppets', duration: '8:35' },
      { title: 'Orion', duration: '8:27' },
    ],
  },
  {
    source: '/albums/the_number_of_the_beast.jpg',
    title: 'The Number of the Beast',
    artist: 'Iron Maiden',
    genre: 'Heavy metal',
    releaseYear: 1982,
    songs: [
      { title: 'Invaders', duration: '3:23' },
      { title: 'The Number of the Beast', duration: '4:52' },
      { title: 'Hallowed Be Thy Name', duration: '7:14' },
    ],
  },
]

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
    </main>
  )
}

export default App
