export interface Movie {
  source: string
  title: string
  releaseYear: number
  rating: number
}

export interface Book {
  source: string
  title: string
  releaseYear: number
  pages: number
}

export interface Track {
  title: string
  duration: string
}

export interface Album {
  source: string
  title: string
  artist: string
  genre: string
  releaseYear: number
  songs: Track[]
}

export interface MoviesProps {
  source: string
  title: string
  releaseYear: number
  rating: number
}

export interface BooksProps {
  source: string
  title: string
  releaseYear: number
  pages: number
}

export interface AlbumsProps {
  source: string
  title: string
  artist: string
  genre: string
  releaseYear: number
  songs: Track[]
}

export interface SongProps {
  title: string
  duration: string
}
