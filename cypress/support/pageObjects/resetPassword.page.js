import Page from "./page";

class ResetPasswordPage extends Page{
    linkHeader = () => cy.get('.site-name')
    header = () => cy.get('h1');
    instruction = () => cy.xpath('//p[contains(text(),\'Enter your account’s email address and we will sen\')]');
    fieldEmail = () => cy.get('#user_password_reset_email');
    btnSubmit = () => cy.get('.ant-btn-primary');
    prescription = () => cy.get('form#user_password_reset > p:nth-of-type(2)');

    open() {
        cy.visit('/user/password/reset/request');
    }

    elementsExists() {
        this.linkHeader().should('be.visible');
        this.header().should('be.visible');
        this.instruction().should('be.visible');
        this.fieldEmail().should('be.visible');
        this.btnSubmit().should('be.visible');
        this.prescription().should('be.visible');
    };

    labelsAreCorrect() {
        this.linkHeader().should('have.text', 'BotanicMap');
        this.header().should('have.text', 'BotanicMap reset password');
        this.instruction().should('have.text', 'Enter your account’s email address and we will send you a link to reset your password.');
        this.fieldEmail().should('have.attr', 'placeholder', 'Email');
        this.btnSubmit().should('have.text', 'Send password reset link');
        this.prescription().should('have.text', 'Remembered your password? Login.');
    };

    submitBtnEnabled(email) {
        this.fieldEmail().type(email);
        this.btnSubmit().should('be.enabled');
    }
}

export default ResetPasswordPage
