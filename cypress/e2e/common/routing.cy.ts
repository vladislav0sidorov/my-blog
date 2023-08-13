describe('Роутинг', () => {
  describe('Пользователь НЕ авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('/')
      cy.getByTestId('HomePage').should('exist')
    })

    it('Переход пользователя на страницу профиля', () => {
      cy.visit('/profile/1')
      cy.getByTestId('HomePage').should('exist')
    })

    it('Переход на несуществующуй маршрут', () => {
      cy.visit('/myprofiler')
      cy.getByTestId('NotFoundPage').should('exist')
    })
  })

  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login()
    })

    it('Переход пользователя на страницу профиля', () => {
      cy.visit('/profile/1')
      cy.getByTestId('ProfilePage').should('exist')
    })

    it('Переход пользователя на страницу списка статей', () => {
      cy.visit('/articles')
      cy.getByTestId('ArticlesPage').should('exist')
    })
  })
})
