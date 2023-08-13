import { EditableProfileCard } from '../../src/features/EditableProfileCard';
import { TestProvider } from '../../src/shared/config/tests/componentRender/componentRender';

const USER_ID = '1';
const newFirstname = 'new-test-firstname';
const newLastname = 'new-test-lastname';
const newAge = '24';
const newUsername = 'new-test-username';
const newCity = 'Tiflis';

describe('Тест на компонент EditableProfileCard.cy.tsx. Пользователь заходит на страницу порофиля', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
    cy.mount(
      <TestProvider
        options={{
          initialState: {
            user: {
              authData: {
                id: USER_ID,
              },
            },
          },
        }}
      >
        <EditableProfileCard id={USER_ID} />
      </TestProvider>,
    );
  });

  it('И видит контент', () => {
    cy.checkDefaultContentProfile();
  });

  it('И кликает на кнопку изменения профиля и изменяет данные в полях', () => {
    cy.updateProfile({
      newFirstname,
      newLastname,
      newAge,
      newUsername,
      newCity,
    });
    cy.checkNewContentProfile({
      newFirstname,
      newLastname,
      newAge,
      newUsername,
      newCity,
    });
  });

  it('И изменяет данные полей, после отеняет изменения', () => {
    cy.updateProfile({
      newFirstname,
      newLastname,
      newAge,
      newUsername,
      newCity,
    });
    cy.getByTestId('EditableProfileCardHeader.CancelButton').click();
    cy.checkDefaultContentProfile();
  });
});
