export const setRate = (starCount: number, feedback: string) => {
  cy.getByTestId(`ArticleDetailsPage.RatingCart.${starCount}`).click();
  cy.getByTestId('ArticleDetailsPage.RatingCart.FeedbackInput').type(feedback);
  cy.getByTestId('ArticleDetailsPage.RatingCart.Send').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      setRate(starCount: number, feedback: string): Chainable<void>;
    }
  }
}
