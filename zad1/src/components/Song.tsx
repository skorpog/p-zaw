interface SongProps {
  // Tytuł utworu.
  title: string
  // Czas trwania utworu w formacie minuty:sekundy.
  duration: string
}

function Song({ title, duration }: SongProps) {
  return (
    <span>
      {title} ({duration})
    </span>
  )
}

export default Song
