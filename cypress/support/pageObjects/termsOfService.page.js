import Page from "./page";

class TOSPage extends Page{
    header = () => cy.get('h1');

    open() {
        cy.visit('/terms')
    };

    isOpen() {
        this.header().should('have.text', 'Terms of Service');
    };
}

export default TOSPage