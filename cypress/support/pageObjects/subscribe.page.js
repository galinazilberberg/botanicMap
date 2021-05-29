import Page from "./page";

class SubscribePage extends Page{
    header = () => cy.get('h4');
    labelEmail = () => cy.get('label[title=\'Email\']');
    fieldEmail = () => cy.get('#basic_email');
    btnSubmit = () => cy.get('.login-form-button');

    open() {
        cy.visit('/subscribe')
    };

    isOpen() {
        this.header().should('have.text', 'Subscribe to our Newsletter');
    };

    elementsExists() {
        this.header().should('be.visible');
        this.labelEmail().should('be.visible');
        this.fieldEmail().should('be.visible');
        this.btnSubmit().should('be.visible');
    };

    labelsAreCorrect() {
        this.header().should('have.text', 'Subscribe to our Newsletter');
        this.labelEmail().should('have.text', 'Email');
        this.btnSubmit().should('have.text', 'Submit Inquiry');
    };

    submitBtnIsEnabled(email) {
        this.fieldEmail().type(email);
        this.btnSubmit().should('be.enabled');
    };
}

export default SubscribePage
