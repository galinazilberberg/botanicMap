import Page from "./page";

class LoginPage extends Page{
    header = () => cy.get('h1');
    fieldEmail = () => cy.get('#normal_login_email');
    fieldPassword = () => cy.get('#normal_login_password');
    btnSubmit = () => cy.get('[type="submit"]');
    prescription = () => cy.get('.ant-form-item:nth-child(5)');



    open() {
        cy.visit('/user/login');
    };

    isOpen() {
        this.header().should('have.text', 'Welcome back!');
    }

    userLogin(email, password) {
        this.fieldEmail().type(email);
        this.fieldPassword().type(password);
        this.btnSubmit().click();
    }

    elementsExists() {
        this.header().should('be.visible');
        this.fieldEmail().should('be.visible');
        this.fieldPassword().should('be.visible');
        this.btnSubmit().should('be.visible');
        this.prescription().should('be.visible');
    }

    labelsAreCorrect() {
        this.header().should('have.text', 'Welcome back!');
        this.fieldEmail().should('have.attr', 'placeholder', 'Email');
        this.fieldPassword().should('have.attr', 'placeholder', 'Password');
        this.btnSubmit().should('have.text', 'Log in');
        this.prescription().should('include.text', 'Don’t have an account? Create one.' + 'Forgot your password? Reset it');
    }

    submitBtnIsEnabled(email, password) {
        this.fieldEmail().type(email);
        this.fieldPassword().type(password);
        this.btnSubmit().should('be.enabled');
    }
}
 export default LoginPage
