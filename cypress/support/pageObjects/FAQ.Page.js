import Page from "./page";

class FAQPage extends Page{
    header = () => cy.get('h4');
    instruction = () => cy.get('p');
    fieldMessage = () => cy.get('#message');
    btnSubmit = () => cy.get('.ant-btn-primary')

    open() {
        cy.visit('/faq')
    };

    isOpen() {
        this.header().should('have.text', 'Frequently asked questions');
    };

    elementsExists() {
        this.header().should('be.visible');
        this.instruction().should('be.visible');
        this.fieldMessage().should('be.visible');
        this.btnSubmit().should('be.visible');
    };

    labelsAreCorrect() {
        this.header().should('have.text', 'FREQUENTLY ASKED QUESTIONS');
        this.instruction().should('have.text', 'Have we missed anything? Ask us a question!');
        this.fieldMessage().should('have.attr', 'placeholder', 'Message');
        this.btnSubmit().should('have.text', 'Submit');
    };

    submitBtnEnabled(message) {
        this.fieldMessage().type(message);
        this.btnSubmit().should('be.enabled');
    };
}

export default FAQPage
