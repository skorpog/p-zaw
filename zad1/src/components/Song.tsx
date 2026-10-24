import type { SongProps } from '../types'

function Song({ title, duration }: SongProps) {
  return (
    <span>
      {title} ({duration})
    </span>
  )
}

export default Song
