let profileId = '';
const newFirstname = 'new-test-firstname';
const newLastname = 'new-test-lastname';
const newAge = '24';
const newUsername = 'new-test-username';
const newCity = 'Tiflis';

describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.visit('profile');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });
  it('И профиль успешно загружается', () => {
    cy.checkDefaultContentProfile();
  });
  it('И обновляет данные аккаунта', () => {
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

  afterEach(() => {
    cy.resetProfile(profileId);
  });
});
