import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  elementId?: string
}

export const Portal = (props: PortalProps) => {
  const { children, elementId = 'root' } = props
  const nodeElement = document.getElementById(elementId)

  if (!nodeElement) {
    alert(`Element with ID '${elementId}' does not exist in the DOM.`)
    return null
  }

  return createPortal(children, nodeElement)
}
