Cypress.Commands.add('filMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('akaua')
    cy.get('#lastName').type('Claudino')
    cy.get('#email').type('akaua@uol.com')
    cy.get('#open-text-area').type('Teste') 
    cy.contains('button', 'Enviar').click()


})