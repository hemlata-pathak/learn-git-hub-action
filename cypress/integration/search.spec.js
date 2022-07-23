/* eslint-disable no-undef */
describe('empty spec', () => {
    it('passes', () => {
      cy.visit('./');
      cy.get('.App-header').should('be.visible');
    })
  })
  