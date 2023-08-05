let currentArticleId = '';

describe('Пользователь заходит на страницу статьи', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.visit(`articles/${currentArticleId}`);
    });
  });

  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });

  it('И видит содержимое статьи', () => {
    cy.getByTestId('ArticleDetailsPage.Avatar').should('exist');
  });

  it('И видит список рекомендаций', () => {
    cy.getByTestId('ArticleDetails.ArticleRecomendationsList').should('exist');
  });

  it('И оставляет комментарий', () => {
    cy.getByTestId('ArticleDetailsPage.Avatar').should('exist');
    cy.getByTestId('ArticleDetailsPage.AddCommentForm').scrollIntoView();
    cy.addComment('Тестовый комментарий');
    cy.getByTestId('ArticleDetailsPage.CommentCard').should('have.length', 1);
  });

  it('И ставит оценку', () => {
    cy.getByTestId('ArticleDetailsPage.Avatar').should('exist');
    cy.getByTestId('ArticleDetailsPage.RatingCart').scrollIntoView();
    cy.setRate(4, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 4);
  });
});
