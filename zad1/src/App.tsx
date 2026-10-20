import Albums from './components/Albums'
import Books from './components/Books'
import Movies from './components/Movies'

function App() {
  return (
    <main>
      <section>
        <h2>Filmy</h2>
        <ul>
          <li>
            <Movies
              source="/movies/inception.jpg"
              title="Incepcja"
              releaseYear={2010}
            />
          </li>
          <li>
            <Movies
              source="/movies/the_matrix.jpg"
              title="Matrix"
              releaseYear={1999}
            />
          </li>
          <li>
            <Movies
              source="/movies/the_lord_of_the_rings.jpg"
              title="Władca Pierścieni: Drużyna Pierścienia"
              releaseYear={2001}
            />
          </li>
        </ul>
      </section>

      <section>
        <h2>Książki</h2>
        <ul>
          <li>
            <Books
              source="/books/dune.jpg"
              title="Diuna"
              releaseYear={1965}
              pages={688}
            />
          </li>
          <li>
            <Books
              source="/books/the_hobbit.jpg"
              title="Hobbit"
              releaseYear={1937}
              pages={320}
            />
          </li>
          <li>
            <Books
              source="/books/the_little_prince.jpg"
              title="Mały Książę"
              releaseYear={1943}
              pages={112}
            />
          </li>
        </ul>
      </section>

      <section>
        <h2>Albumy</h2>
        <ul>
          <li>
            <Albums
              source="/albums/master_of_puppets.jpg"
              title="Master of Puppets"
              artist="Metallica"
              genre="Thrash metal"
              releaseYear={1986}
              songs={[
                { title: 'Battery', duration: '5:13' },
                { title: 'Master of Puppets', duration: '8:35' },
                { title: 'Orion', duration: '8:27' },
              ]}
            />
          </li>
          <li>
            <Albums
              source="/albums/the_number_of_the_beast.jpg"
              title="The Number of the Beast"
              artist="Iron Maiden"
              genre="Heavy metal"
              releaseYear={1982}
              songs={[
                { title: 'Invaders', duration: '3:23' },
                { title: 'The Number of the Beast', duration: '4:52' },
                { title: 'Hallowed Be Thy Name', duration: '7:14' },
              ]}
            />
          </li>
        </ul>
      </section>
    </main>
  )
}

export default App
