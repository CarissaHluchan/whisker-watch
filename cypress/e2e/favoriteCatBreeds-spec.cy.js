describe('favoriteCatBreed-spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.thecatapi.com/v1/breeds?api_key=*', {
      statusCode: 200,
      fixture: 'allCatBreeds',
    }).as('allCatBreeds');

    cy.visit('http://localhost:3000/favoriteCatbreeds');
  });

  it('Should display the users Favorite cat breed page', () => {
    cy.get('.favorite-cat-breed-main').should('be.visible');
    cy.get('.nav-button-wrapper > :nth-child(1)').should('be.visible');
    cy.get('.nav-button-wrapper > :nth-child(2)').should('be.visible');
    cy.get('.favorite-cat-breed-title').contains('My Favorite Cat Breeds');
  });

  it('Should be able to navigate to All Breeds from the button', () => {
    cy.get('.nav-button-wrapper > :nth-child(1)').contains('All Breeds')
      .click();
    cy.get('.all-cat-breed-container').should('be.visible');
  });

  it('Should be able to navigate to Rare Breeds from the button', () => {
    cy.get('.nav-button-wrapper > :nth-child(2)').contains('Rare Breeds')
      .click();
    cy.get('.rare-cat-breed-container').should('be.visible');
  });
});