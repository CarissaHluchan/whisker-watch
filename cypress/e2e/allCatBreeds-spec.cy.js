describe('allCatBreeds-spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.thecatapi.com/v1/breeds?api_key=*', {
      statusCode: 200,
      fixture: 'allCatBreeds',
    }).as('allCatBreeds')

    cy.visit('http://localhost:3000/allCatBreeds')
  })
  
  it('passes', () => {
  })
})