// Odpowiedź na pytanie: tak, to dobry pomysł, pozwala nie powielanie kodu
import { useId, useState, type ReactNode } from 'react'

interface CollapsibleSectionProps {
  title: string
  children: ReactNode
}

function CollapsibleSection({ title, children }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(true)
  const contentId = useId()
  let arrow

  if (isOpen) {
    arrow = '▾'
  } else {
    arrow = '▸'
  }

  return (
    <section className="mb-5">
      <h2 className="mb-3">
        <button
          className="btn btn-link p-0 text-start text-decoration-none text-body fs-2 fw-bold"
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span aria-hidden="true">{arrow}</span>{' '}
          {title}
        </button>
      </h2>
      {isOpen && <div id={contentId}>{children}</div>}
    </section>
  )
}

export default CollapsibleSection
