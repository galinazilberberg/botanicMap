import Page from "./page";

class SubscribePage extends Page{
    header = () => cy.get('h4');

    open() {
        cy.visit('/subscribe')
    };

    isOpen() {
        this.header().should('have.text', 'Subscribe to our Newsletter');
    };
}

export default SubscribePage