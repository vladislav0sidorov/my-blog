import { headers } from '../../shared/const/common';

export const checkDefaultContentProfile = () => {
  cy.getByTestId('ProfileCard.FirstName').should('have.value', 'Test-user');
  cy.getByTestId('ProfileCard.LastName').should('have.value', 'Test');
  cy.getByTestId('ProfileCard.Age').should('have.value', '22');
  cy.getByTestId('ProfileCard.Username').should('have.value', 'Test-username');
  cy.getByTestId('ProfileCard.City').should('have.value', 'Tbilisi');
  cy.getByTestId('ProfileCard.Avatar').should(
    'have.value',
    'https://sun9-34.userapi.com/impg/UzNXUUdynHLaVwLdtI9UYpHGAIQ_PhRPsOlbgA/AGeZ7EkXPqo.jpg?size=749x811&quality=95&sign=3969dbae6e15b69972c3db5c3d5cb93c&type=album',
  );
};

export const checkNewContentProfile = ({
  newFirstname, newLastname, newAge, newUsername, newCity,
}: Record<string, string>) => {
  cy.getByTestId('ProfileCard.FirstName').should('have.value', newFirstname);
  cy.getByTestId('ProfileCard.LastName').should('have.value', newLastname);
  cy.getByTestId('ProfileCard.Age').should('have.value', newAge);
  cy.getByTestId('ProfileCard.Username').should('have.value', newUsername);
  cy.getByTestId('ProfileCard.City').should('have.value', newCity);
};

export const updateProfile = ({
  newFirstname, newLastname, newAge, newUsername, newCity,
}: Record<string, string>) => {
  cy.getByTestId('EditableProfileCardHeader.EditButton').click();
  cy.getByTestId('ProfileCard.FirstName').clear().type(newFirstname);
  cy.getByTestId('ProfileCard.LastName').clear().type(newLastname);
  cy.getByTestId('ProfileCard.Age').clear().type(newAge);
  cy.getByTestId('ProfileCard.Username').clear().type(newUsername);
  cy.getByTestId('ProfileCard.City').clear().type(newCity);
};

export const resetProfile = (profileId: string) => {
  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers,
    body: {
      id: '3',
      firstname: 'Test-user',
      lastname: 'Test',
      age: '22',
      currency: 'GEL',
      country: 'Georgia',
      city: 'Tbilisi',
      username: 'Test-username',
      avatar: 'https://sun9-34.userapi.com/impg/UzNXUUdynHLaVwLdtI9UYpHGAIQ_PhRPsOlbgA/AGeZ7EkXPqo.jpg?size=749x811&quality=95&sign=3969dbae6e15b69972c3db5c3d5cb93c&type=album',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      checkDefaultContentProfile(): Chainable<void>;
      checkNewContentProfile(newData?: Record<string, string>): Chainable<void>;
      updateProfile(newData?: Record<string, string>): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
