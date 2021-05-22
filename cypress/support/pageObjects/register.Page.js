import Page from "./page";

export default class RegisterPage extends Page {

    header = () => cy.get('h1');
    fieldFirstName = () => cy.get('#user_login_firstName');
    fieldLastName = () => cy.get('#user_login_lastName');
    fieldEmail = () => cy.get('#user_login_email');
    fieldPassword = () => cy.get('#user_login_password');
    checkBox = () => cy.get('#user_login_agreement');
    checkBoxLabel = () => cy.get('.ant-checkbox-wrapper');
    prescription = () => cy.get('p');
    btnSubmit = () => cy.get('.ant-btn-primary');
    linkTermsAndAgreement = () => cy.get('.ant-btn-link');
    linkLogin = () => cy.get('[href=\'\\/user\\/login\']');

    open() {
        cy.visit('/user/register')
    };

    isOpen() {
        this.header().should('have.text', 'Create an account');
    }

    elementsExists() {
        this.header().should('be.visible');
        this.fieldFirstName().should('be.visible')
        this.fieldLastName().should('be.visible');
        this.fieldEmail().should('be.visible');
        this.fieldPassword().should('be.visible');
        this.checkBox().check().should('be.checked').uncheck();
        this.checkBoxLabel().should('be.visible');
        this.prescription().should('be.visible');
        this.btnSubmit().should('be.visible');
        this.linkTermsAndAgreement().should('be.visible');
    };

    labelsAreCorrect(){
        this.header().should('have.text', 'Create an account');
        this.fieldFirstName().should('have.attr', 'placeholder', 'First Name');
        this.fieldLastName().should('have.attr', 'placeholder', 'Last Name');
        this.fieldEmail().should('have.attr', 'placeholder', 'Email');
        this.fieldPassword().should('have.attr', 'placeholder', 'Password');
        this.checkBoxLabel().should('have.text', 'I have read' + 'Terms and agreements');
        this.prescription().should('have.text', 'Already have an account? Just click Log in.');
        this.btnSubmit().should('have.text', 'Register');
    };

    submitButtonIsEnabled(firstName, lastName, email, password) {
        this.fieldFirstName().type(firstName);
        this.fieldLastName().type(lastName);
        this.fieldEmail().type(email);
        this.fieldPassword().type(password);
        this.checkBox().click();
        this.btnSubmit().should('be.enabled');
    };
}
