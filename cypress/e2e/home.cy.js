describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://sweetshop.netlify.app/')
    cy.get(".display-3").contains("Welcome to the sweet shop!")
  })
  it('the features on the homepage are correct', () => {
    cy.visit('https://sweetshop.netlify.app/')
  })
  
})