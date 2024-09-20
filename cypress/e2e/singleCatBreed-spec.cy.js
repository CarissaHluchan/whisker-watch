describe('singleCatBreed-spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.thecatapi.com/v1/breeds?api_key=*', {
      statusCode: 200,
      fixture: 'allCatBreeds',
    }).as('allCatBreeds');

    cy.visit('http://localhost:3000/catBreed/aege');
  });

  it('Should display button and detailed information about a breed', () => {
    cy.get('.single-breed-button-wrapper > :nth-child(1)').should('be.visible');
    cy.get('.single-breed-button-wrapper > :nth-child(2)').should('be.visible');
    cy.get('.single-breed-button-wrapper > :nth-child(3)').should('be.visible');
    cy.get('.add-to-favorites-button').should('be.visible');

    cy.get('.single-cat-all-wrapper').should('be.visible');
    cy.get('.single-cat-breed-name').contains('Aegean');
    cy.get('.single-cat-breed-image').should('be.visible');

    cy.get('.description-wrapper > .single-cat-content-title').contains('Description');
    cy.get('.description-wrapper > .single-cat-content').contains('Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.');

    cy.get('.termperament-wrapper > .single-cat-content-title').contains('Temperament');
    cy.get('.single-cat-content-temperment').contains('Affectionate, Social, Intelligent, Playful, Active');

    cy.get('.weight-wrapper > .single-cat-content-title').contains('Weight');
    cy.get('.single-cat-content-weight').contains('7 - 10 lbs');
    cy.get('.weight-wrapper > .single-cat-content').contains('3 - 5 kg');

    cy.get('.lifespan-wrapper > .single-cat-content-title').contains('Lifespan');
    cy.get('.lifespan-wrapper > .single-cat-content').contains('9 - 12 years');

    cy.get('.country-wrapper > .single-cat-content-title').contains('Country of Origin');
    cy.get('.country-wrapper > .single-cat-content').contains('Greece');

    cy.get(':nth-child(6) > .single-cat-content-title').contains('Traits');
    cy.get(':nth-child(6) > .single-cat-trait-content').contains('Ranges are 1 (least) - 5 (most)');
    cy.get(':nth-child(7) > :nth-child(1) > :nth-child(1) > .trait-content-title').contains('Adaptability');
    cy.get(':nth-child(7) > :nth-child(1) > :nth-child(1) > .trait-content').contains(5);
    cy.get(':nth-child(7) > :nth-child(1) > :nth-child(2) > .trait-content-title').contains('Affection level');
    cy.get(':nth-child(7) > :nth-child(1) > :nth-child(2) > .trait-content').contains(4);
    cy.get(':nth-child(7) > :nth-child(1) > :nth-child(3) > .trait-content-title').contains('Child friendly');
    cy.get(':nth-child(7) > :nth-child(1) > :nth-child(3) > .trait-content').contains(4)
    cy.get(':nth-child(1) > :nth-child(4) > .trait-content-title').contains('Dog friendly');
    cy.get(':nth-child(1) > :nth-child(4) > .trait-content').contains(4);

    cy.get(':nth-child(7) > :nth-child(2) > :nth-child(1) > .trait-content-title').contains('Energy level');
    cy.get(':nth-child(7) > :nth-child(2) > :nth-child(1) > .trait-content').contains(3);
    cy.get(':nth-child(7) > :nth-child(2) > :nth-child(2) > .trait-content-title').contains('Grooming');
    cy.get(':nth-child(7) > :nth-child(2) > :nth-child(2) > .trait-content').contains(3);
    cy.get(':nth-child(7) > :nth-child(2) > :nth-child(3) > .trait-content-title').contains('Health issues');
    cy.get(':nth-child(7) > :nth-child(2) > :nth-child(3) > .trait-content').contains(1);
    cy.get(':nth-child(2) > :nth-child(4) > .trait-content-title').contains('Intelligence');
    cy.get(':nth-child(2) > :nth-child(4) > .trait-content').contains(3);

    cy.get(':nth-child(7) > :nth-child(3) > :nth-child(1) > .trait-content-title').contains('Shedding level');
    cy.get(':nth-child(7) > :nth-child(3) > :nth-child(1) > .trait-content').contains(3);
    cy.get(':nth-child(7) > :nth-child(3) > :nth-child(2) > .trait-content-title').contains('Social needs')
    cy.get(':nth-child(7) > :nth-child(3) > :nth-child(2) > .trait-content').contains(4);
    cy.get(':nth-child(3) > :nth-child(3) > .trait-content-title').contains('Stranger friendly');
    cy.get(':nth-child(3) > :nth-child(3) > .trait-content').contains(4);
    cy.get(':nth-child(3) > :nth-child(4) > .trait-content-title').contains('Vocalisation');
    cy.get(':nth-child(3) > :nth-child(4) > .trait-content').contains(3);

    cy.get(':nth-child(8) > .other-traits-content-title').contains('Other Traits');
    cy.get(':nth-child(8) > .single-cat-trait-content').contains('Ranges: has the trait (yes). Does not have the trait (no).');
    cy.get(':nth-child(9) > :nth-child(1) > :nth-child(1) > .trait-content-title').contains('Experimental');
    cy.get(':nth-child(9) > :nth-child(1) > :nth-child(1) > .trait-content').contains('No');
    cy.get(':nth-child(9) > :nth-child(1) > :nth-child(2) > .trait-content-title').contains('Hairless')
    cy.get(':nth-child(9) > :nth-child(1) > :nth-child(2) > .trait-content').contains('No');
    cy.get(':nth-child(9) > :nth-child(1) > :nth-child(3) > .trait-content-title').contains('Natural');
    cy.get(':nth-child(9) > :nth-child(1) > :nth-child(3) > .trait-content').contains('No');

    cy.get(':nth-child(9) > :nth-child(2) > :nth-child(1) > .trait-content-title').contains('Rare');
    cy.get(':nth-child(9) > :nth-child(2) > :nth-child(1) > .trait-content').contains('No');
    cy.get(':nth-child(9) > :nth-child(2) > :nth-child(2) > .trait-content-title').contains('Rex');
    cy.get(':nth-child(9) > :nth-child(2) > :nth-child(2) > .trait-content').contains('No');
    cy.get(':nth-child(9) > :nth-child(2) > :nth-child(3) > .trait-content-title').contains('Suppressed tail');
    cy.get(':nth-child(9) > :nth-child(2) > :nth-child(3) > .trait-content').contains('No');

    cy.get(':nth-child(9) > :nth-child(3) > :nth-child(1) > .trait-content-title').contains('Short legs');
    cy.get(':nth-child(9) > :nth-child(3) > :nth-child(1) > .trait-content').contains('No');
    cy.get(':nth-child(9) > :nth-child(3) > :nth-child(2) > .trait-content-title').contains('Hypoallergenic');
    cy.get(':nth-child(9) > :nth-child(3) > :nth-child(2) > .trait-content').contains('No')

    cy.get('.single-cat-all-wrapper > :nth-child(10)').contains('More Information');
    cy.get('[href="http://www.vetstreet.com/cats/aegean-cat"]').contains('Vetstreet')
      .realHover()
      .should('have.css', 'color', 'rgb(14, 39, 89)')
      .should('have.css', 'font-weight', '700')
      .should('have.css', 'text-decoration-line', 'underline');
    cy.get('.bottom').contains('Wikipedia')
      .realHover()
      .should('have.css', 'color', 'rgb(14, 39, 89)')
      .should('have.css', 'font-weight', '700')
      .should('have.css', 'text-decoration-line', 'underline');
  });
});