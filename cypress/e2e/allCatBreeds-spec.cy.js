describe('allCatBreeds-spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.thecatapi.com/v1/breeds?api_key=*', {
      statusCode: 200,
      fixture: 'allCatBreeds',
    }).as('allCatBreeds')

    cy.visit('http://localhost:3000/allCatBreeds')
  })
  
  it('Should display an all cat breed header, a button, and all cat breed cards', () => {
    cy.get('.all-cat-breed-header').should('be.visible');
    cy.get('.all-cat-breed-title').contains('All Cat Breeds');
    cy.get('.all-cat-breed-instructions').contains('Explore all the cat breeds we have. Scroll through and click on a cat to learn more about that breed. Discover their temperament, weight, lifespan, and more. Add breeds you like to a list of favorites and learn more about them.')
    cy.get('.my-favorite-cats-button').should('be.visible');

    cy.get('.all-cat-breed-container').should('exist');
    const catBreeds = [
      { id: '#abob', name: 'American Bobtail'},
      { id: '#abys', name: 'Abyssinian'},
      { id: '#aege', name: 'Aegean' },
      { id: '#dons', name: 'Donskoy' },
      { id: '#kora', name: 'Korat' },
      { id: '#nebe', name: 'Nebelung' }
    ];
    catBreeds.forEach(breed => {
      cy.get(breed.id).should('be.visible')
        .get(`${breed.id} > .cat-breed-img`).should('be.visible')
        .realHover()
        .should('have.css', 'transform')
        .and('contain', 'matrix');
      cy.get(`${breed.id} > .cat-breed-name`).contains(breed.name);
    });
  });

  it('Should be able to navigate to favorites from the button', () => {
    cy.get('.my-favorite-cats-button').click();
    cy.url().should('include', '/favoriteCatbreeds');
    cy.get('.favorite-cat-breed-main').should('be.visible');
  });
});