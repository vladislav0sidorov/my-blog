export const addComment = (test: string) => {
  cy.getByTestId('ArticleDetailsPage.AddCommentForm.Input').type(test);
  cy.getByTestId('ArticleDetailsPage.AddCommentForm.Button').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      addComment(text: string): Chainable<void>;
    }
  }
}
