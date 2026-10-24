import type { Album, Book, Movie } from './types'

export const movies: Movie[] = [
  { source: '/movies/inception.jpg', title: 'Incepcja', releaseYear: 2010, rating: 7 },
  { source: '/movies/the_matrix.jpg', title: 'Matrix', releaseYear: 1999, rating: 9 },
  { source: '/movies/the_lord_of_the_rings.jpg', title: 'Władca Pierścieni: Drużyna Pierścienia', releaseYear: 2001, rating: 9 },
  { source: '/movies/sm_universe.jpg', title: 'Spider-Man: Uniwersum', releaseYear: 2018, rating: 10 },
]

export const books: Book[] = [
  { source: '/books/dune.jpg', title: 'Diuna', releaseYear: 1965, pages: 688 },
  { source: '/books/the_hobbit.jpg', title: 'Hobbit', releaseYear: 1937, pages: 320 },
  { source: '/books/the_little_prince.jpg', title: 'Mały Książę', releaseYear: 1943, pages: 112 },
]

export const albums: Album[] = [
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
      { title: 'Welcome Home (Sanitarium)', duration: '6:27' },
      { title: 'Disposable Heroes', duration: '8:16' },
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

movies.sort((a, b) => a.title.localeCompare(b.title, 'pl'))
books.sort((a, b) => a.title.localeCompare(b.title, 'pl'))
albums.sort((a, b) => a.title.localeCompare(b.title, 'pl'))

export const moviesAfter2010 = movies.filter((movie) => movie.releaseYear > 2010)
export const booksByReleaseYear = [...books].sort((a, b) => b.releaseYear - a.releaseYear)

let albumWithMostSongs = albums[0]

for (const album of albums) {
  if (album.songs.length > albumWithMostSongs.songs.length) {
    albumWithMostSongs = album
  }
}

export { albumWithMostSongs }
