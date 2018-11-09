describe('Basic Test', () => {
    beforeEach(function() {
        cy.visit('');
    });
    it('Should load app', function() {
        cy.title().should('be', 'Invoice Editor');
        cy.get('form').should('have.length', 3);
    });

    it('Should add invoices', function() {
        cy.get('[data-cy="form-new"]').within(function() {
            cy.get('input[type="text"]')
                .first()
                .type('abc{enter}');
        });
        cy.get('form').should('have.length', 4);
        cy.get('[data-cy="form-new"] input[type="text"]').should(
            'have.value',
            '',
        );
    });

    it('Should remove invoices', function() {
        cy.get('[data-cy="form-1"] .delete').click();
        cy.get('form').should('have.length', 2);
        cy.get('[data-cy="total-subtotal"]').should('be', '$31.98');
    });
});
