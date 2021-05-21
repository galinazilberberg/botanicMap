import Page from "./page";

class FAQPage extends Page{
    header = () => cy.get('h4');

    open() {
        cy.visit('/faq')
    };

    isOpen() {
        this.header().should('have.text', 'Frequently asked questions');
    };
}

export default FAQPage