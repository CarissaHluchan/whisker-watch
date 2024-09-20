describe('sadPath-spec', () => {
  it('Should display a message for a 500 error', () => {
    cy.intercept('GET', 'https://api.thecatapi.com/v1/breeds?api_key=*', {
      statusCode: 500,
    }).as('500');
    cy.visit('http://localhost:3000/');
    cy.get('h2').contains('We are so sorry, there been a 500 error! Please try again later.');
  });

  it('Should display a message for a 503 error', () => {
    cy.intercept('GET', 'https://api.thecatapi.com/v1/breeds?api_key=*', {
      statusCode: 503,
    }).as('503');
    cy.visit('http://localhost:3000/');
    cy.get('h2').contains('We are so sorry, there been a 500 error! Please try again later.');
  });

  it('Should display a message for a 404 error', () => {
    cy.visit('http://localhost:3000/caat');
    cy.get('h2').contains('We are so sorry, there been a 404 error! Please try again later.');
  });

  it('Should display a message for a network error', () => {
    cy.intercept('GET', 'https://api.thecatapi.com/v1/breeds?api_key=*', {
      forceNetworkError: true,
    }).as('networkError');
    cy.visit('http://localhost:3000/');
    cy.get('h2').contains('We are so sorry, there been a 500 error! Please try again later.');
  });
});