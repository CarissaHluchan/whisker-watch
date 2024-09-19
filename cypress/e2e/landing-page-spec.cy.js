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
      .get('header').should('exist')
      .get('.menu-png').should('exist')
      .get('.menu-png').realHover()
      .get('[href="/"]').contains('Rare Cat Breeds')
      .get('[href="/allCatBreeds"]').contains('All Cat Breeds')
      .get('[href="/favoriteCatbreeds"]').contains('Favorite Cat Breeds')
      .get('h1').within(() => {
        cy.contains('Whisker').should('exist')
          .get('.whisker-logo').should('exist')
          .realHover()
          .should('have.css', 'animation-name', 'shake')
          .should('have.css', 'animation-duration', '0.5s')
          .should('have.css', 'animation-iteration-count', 'infinite')
        cy.wait(500)
      })
      .get('h1').within(() => {
        cy.contains('Watch').should('exist')
      });

    cy.get('.rare-cat-breed-container').should('exist')
      .get('.rare-cat-breed-title').contains('Rare Cat Breeds')
      .get('.rare-cat-breed-instructions').contains('Explore rare cat breeds. Scroll through and click on a cat to learn more about that breed. Discover their temperament, weight, lifespan and more. Add breeds you like to a list of favorites and learn more about them.')
      .get('.my-favorite-cats-button').should('exist').contains('My favorite cats');

    cy.get('#aege').should('exist')
      .get('#aege > .rare-cat-breed-img').should('exist')
      .realHover()
      .should('have.css', 'transform')
      .and('contain', 'matrix');
    cy.get('#aege > .rare-cat-breed-name').contains('Aegean');

    cy.get('#dons').should('exist')
      .get('#dons > .rare-cat-breed-img').should('exist')
      .realHover()
      .should('have.css', 'transform')
      .and('contain', 'matrix');
    cy.get('#dons > .rare-cat-breed-name').contains('Donskoy');

    cy.get('#kora').should('exist')
      .get('#kora > .rare-cat-breed-img').should('exist')
      .realHover()
      .should('have.css', 'transform')
      .and('contain', 'matrix');
    cy.get('#kora > .rare-cat-breed-name').contains('Korat');

    cy.get('#nebe').should('exist')
      .get('#nebe > .rare-cat-breed-img').should('exist')
      .realHover()
      .should('have.css', 'transform')
      .and('contain', 'matrix');
    cy.get('#nebe > .rare-cat-breed-name').contains('Nebelung');

    cy.get('footer').should('exist') 
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
    cy.get('[href="/allCatBreeds"]').should('be.visible');
    cy.get('[href="/allCatBreeds"]').click();
    cy.url().should('include', '/allCatBreeds');
    cy.get('.all-cat-breed-container').should('be.visible');
 
  });

  it('Should be able to navigate to Favorite Cat Breeds from the nav menu', () => {
    cy.get('.menu-png').realHover({ position: "topLeft" });
    cy.get('[href="/favoriteCatbreeds"]').should('be.visible');
    cy.get('[href="/favoriteCatbreeds"]').click();
    cy.url().should('include', '/favoriteCatbreeds')
    cy.get('.favorite-cat-breed-main').should('be.visible')
  });

  it ('Should be able to naviaget to favorites from the button', () => {
    cy.get('.my-favorite-cats-button').click();
    cy.get('[href="/favoriteCatbreeds"]').should('be.visible')
    cy.get('.favorite-cat-breed-main').should('be.visible')
  });
});
