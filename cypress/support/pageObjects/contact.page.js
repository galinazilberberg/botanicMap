import Page from "./page";

class ContactPage extends Page{
    header = () => cy.get('h1');
    instruction = () => cy.get('p');
    fieldName = () => cy.get('#normal_login_name');
    fieldEmail = () => cy.get('#normal_login_email');
    fieldPhone = () => cy.get('#normal_login_phone');
    fieldMessage = () => cy.get('#normal_login_message');
    btnSubmit = () => cy.get('.login-form-button');


    open() {
        cy.visit('/contact')
    };

    isOpen() {
        this.header().should('have.text', 'Contact us');
    };

    elementsExists () {
        this.header().should('be.visible');
        this.instruction().should('be.visible');
        this.fieldName().should('be.visible');
        this.fieldEmail().should('be.visible');
        this.fieldPhone().should('be.visible');
        this.fieldMessage().should('be.visible');
        this.btnSubmit().should('be.visible');
    };

    labelsAreCorrect() {
        this.header().should('have.text', 'Contact us');
        this.instruction().should('have.text', 'If you have any questions to us, please fill out and submit the following form.');
        this.fieldName().should('have.attr', 'placeholder', 'Name');
        this.fieldEmail().should('have.attr', 'placeholder', 'Email');
        this.fieldPhone().should('have.attr', 'placeholder', "Cell phone number '17775551122' ");//Cell phone number '17775551122
        this.fieldMessage().should('have.attr', 'placeholder', 'Message');
        this.btnSubmit().should('have.text', 'Submit');
    };

    submitBtnEnabled(name, email, phone, message) {
        this.fieldName().type(name);
        this.fieldEmail().type(email);
        this.fieldPhone().type(phone);
        this.fieldMessage().type(message);
        this.btnSubmit().should('be.enabled');
    }
}

export default ContactPage
