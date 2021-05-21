import Page from "./page";

export default class RegisterPage extends Page {

    header = () => cy.get('h1');

    open() {
        cy.visit('/user/register')
    };

    isOpen() {
        this.header().should('have.text', 'Create an account');
    }
}
