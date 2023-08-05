let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.visit('profile');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });
  it('И профиль успешно загружается', () => {
    cy.getByTestId('ProfileCard.FirstName').should('have.value', 'Test-user');
    cy.getByTestId('ProfileCard.LastName').should('have.value', 'Test');
    cy.getByTestId('ProfileCard.Age').should('have.value', '22');
    cy.getByTestId('ProfileCard.Username').should('have.value', 'Test-username');
    cy.getByTestId('ProfileCard.City').should('have.value', 'Tbilisi');
    cy.getByTestId('ProfileCard.Avatar').should(
      'have.value',
      'https://sun9-34.userapi.com/impg/UzNXUUdynHLaVwLdtI9UYpHGAIQ_PhRPsOlbgA/AGeZ7EkXPqo.jpg?size=749x811&quality=95&sign=3969dbae6e15b69972c3db5c3d5cb93c&type=album',
    );
  });
  it('И обновляет данные аккаунта', () => {
    const newFirstname = 'new-test-firstname';
    const newLastname = 'new-test-lastname';
    const newAge = '24';
    const newUsername = 'new-test-username';
    const newCity = 'Tiflis';

    cy.updateProfile({
      newFirstname,
      newLastname,
      newAge,
      newUsername,
      newCity,
    });
    cy.getByTestId('ProfileCard.FirstName').should('have.value', newFirstname);
    cy.getByTestId('ProfileCard.LastName').should('have.value', newLastname);
    cy.getByTestId('ProfileCard.Age').should('have.value', newAge);
    cy.getByTestId('ProfileCard.Username').should('have.value', newUsername);
    cy.getByTestId('ProfileCard.City').should('have.value', newCity);
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });
});
