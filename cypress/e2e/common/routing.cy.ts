import { selectByTestid } from '../../helpers/selectByTestid/selectByTestid';

describe('Роутинг', () => {
  describe('Пользователь НЕ авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('/');
      cy.get(selectByTestid('HomePage')).should('exist');
    });

    it('Переход пользователя на страницу профиля', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestid('HomePage')).should('exist');
    });

    it('Переход на несуществующуй маршрут', () => {
      cy.visit('/myprofiler');
      cy.get(selectByTestid('NotFoundPage')).should('exist');
    });
  });

  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login();
    });

    it('Переход пользователя на страницу профиля', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestid('ProfilePage')).should('exist');
    });

    it('Переход пользователя на страницу списка статей', () => {
      cy.visit('/articles');
      cy.get(selectByTestid('ArticlesPage')).should('exist');
    });
  });
});
