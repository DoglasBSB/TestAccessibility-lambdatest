
describe('Accessibility', () => {
  it('should run accessibility audits', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/')
    cy.injectAxe()

    // scan the entire page by default
    cy.checkA11y()

    // scans specific element only
    // cy.checkA11y('#entry_217839 p')
  
    // exclude specific elements
    cy.checkA11y({exclude: ['#entry_217839 p']})
  })
})