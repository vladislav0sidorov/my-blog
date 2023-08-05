describe('Пользователь заходит на страницу со списком статей', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('articles');
    });
  });

  it('И статьи успешно загружаются', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  });

  it('И вводит в поиск название существующей статьи', () => {
    cy.getByTestId('ArticlesPage.ArticlesSearchInput').type('Python news');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 1);
  });

  it('И вводит в поиск название существующей статьи, после удаляет и вводит название другой статьи заглавными буквами', () => {
    cy.getByTestId('ArticlesPage.ArticlesSearchInput').type('Python news');
    cy.wait(2000);
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 1);
    cy.getByTestId('ArticlesPage.ArticlesSearchInput').clear().type('JAVASCRIPT');
    cy.wait(2000);
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 1);
  });

  it('И вводит в поиск название не существующей статьи', () => {
    cy.getByTestId('ArticlesPage.ArticlesSearchInput').type('123');
    cy.getByTestId('ArticleListItem').should('have.length', 0);
  });

  it('И изменяет категорию', () => {
    cy.getByTestId('ArticlesPage.ArticlesTabs.Science').click();
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 1);
  });

  it('И изменяет несколько категорий', () => {
    cy.getByTestId('ArticlesPage.ArticlesTabs.Science').click();
    cy.wait(2000);
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 0);
    cy.getByTestId('ArticlesPage.ArticlesTabs.It').click();
    cy.wait(2000);
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 0);
    cy.getByTestId('ArticlesPage.ArticlesTabs.Economics').click();
    cy.wait(2000);
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 0);
  });
});
