describe('landing-page-spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.thecatapi.com/v1/breeds?api_key=*', {
      statusCode: 200,
      fixture: 'allCatBreeds',
    }).as('allCatBreeds')

    cy.visit('http://localhost:3000/')
  });

  it('Should dispaly the header, rare cat breed cards, and a footer', () => {
    cy.get('html').should('exist')
      .get('header').should('be.visible')
      .get('.menu-png').should('be.visible')
      .get('.menu-png').realHover()
      .get('[href="/"]').contains('Rare Cat Breeds')
      .get('[href="/allCatBreeds"]').contains('All Cat Breeds')
      .get('[href="/favoriteCatbreeds"]').contains('Favorite Cat Breeds')
      .get('h1').within(() => {
        cy.contains('Whisker').should('be.visible')
          .get('.whisker-logo').should('be.visible')
          .realHover()
          .should('have.css', 'animation-name', 'shake')
          .should('have.css', 'animation-duration', '0.5s')
          .should('have.css', 'animation-iteration-count', 'infinite')
        cy.wait(500)
      })
      .get('h1').within(() => {
        cy.contains('Watch').should('be.visible')
      });

      const catBreeds = [
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

    cy.get('footer').should('be.visible') 
      .within(() => {
        cy.get('div').contains('Created By: Carissa Hluchan');  
        cy.get('.url-link-github')
          .should('contain', 'See it on: GitHub')
          .should('have.attr', 'href', 'https://github.com/CarissaHluchan')
          .realHover()
          .should('have.css', 'color', 'rgb(14, 39, 89)')
          .should('have.css', 'font-weight', '700')
          .should('have.css', 'text-decoration-line', 'underline');
      });
  });

  it('Should be able to navigate to all cat breeds page from nav menu', () => {
    cy.get('.menu-png').realHover({ position: "topLeft" });
    cy.get('[href="/allCatBreeds"]').should('be.visible').click({ force: true });;
    cy.url().should('include', '/allCatBreeds');
    cy.get('.all-cat-breed-container').should('be.visible');
 
  });

  it('Should be able to navigate to favorites from the nav menu', () => {
    cy.get('.menu-png').realHover({ position: "topLeft" });
    cy.get('[href="/favoriteCatbreeds"]').should('be.visible').click({ force: true });
    cy.url().should('include', '/favoriteCatbreeds');
    cy.get('.favorite-cat-breed-main').should('be.visible');
  });

  it ('Should be able to naviaget to favorites from the button', () => {
    cy.get('.my-favorite-cats-button').click();
    cy.get('[href="/favoriteCatbreeds"]').should('be.visible')
    cy.get('.favorite-cat-breed-main').should('be.visible')
  });
});
