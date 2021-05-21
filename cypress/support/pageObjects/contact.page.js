import Page from "./page";

class ContactPage extends Page{
    header = () => cy.get('h1');

    open() {
        cy.visit('/contact')
    };

    isOpen() {
        this.header().should('have.text', 'Contact us');
    };
}

export default ContactPage