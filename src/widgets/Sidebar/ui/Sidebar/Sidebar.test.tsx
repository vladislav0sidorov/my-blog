import { fireEvent, screen } from '@testing-library/react'

import { Sidebar } from './Sidebar'

import { componentRender } from '@/shared/config/tests/componentRender/componentRender'

describe('Sidebar', () => {
  test('Render sidebar', () => {
    componentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('Sidebar toggle', () => {
    componentRender(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
