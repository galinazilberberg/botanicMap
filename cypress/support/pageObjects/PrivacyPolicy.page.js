import Page from "./page";

class PPPage extends Page{
    header = () => cy.get('h1');

    open() {
        cy.visit('/privacy')
    };

    isOpen() {
        this.header().should('have.text', 'BotanicMap Privacy Policy');
    };
}

export default PPPage