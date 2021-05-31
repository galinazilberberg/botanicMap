import Page from "./page";

class PPPage extends Page{
    header = () => cy.get('h1');
    contactInfo = () => cy.get('div > ul:nth-of-type(5)');
    dataModified = () => cy.get('div > p:nth-of-type(21)');

    open() {
        cy.visit('/privacy')
    };

    isOpen() {
        this.header().should('have.text', 'BotanicMap Privacy Policy');
    };

    elementsExists() {
        this.header().should('be.visible');
        this.contactInfo().should('be.visible');
        this.dataModified().should('be.visible');
    };

    labelsAreCorrect() {
        this.header().should('have.text', 'BotanicMap Privacy Policy');
        this.contactInfo().should('contain.text', 'By email: i@botanicmap.com' + 'By mail: 231 S Bayview ave, 16,' + 'Sunnyvale, CA 94086');
        this.dataModified().should('contain.text', '05/22/2020');
    };

};

export default PPPage
