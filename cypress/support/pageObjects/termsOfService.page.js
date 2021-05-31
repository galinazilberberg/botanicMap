import Page from "./page";

class TOSPage extends Page{

    header = () => cy.get('h1');
    dataAgreement = () => cy.xpath('//p[contains(text(),\'This Agreement was last modified on 21/03/2021\')]');

    open() {
        cy.visit('/terms')
    };

    isOpen() {
        this.header().should('have.text', 'Terms of Service');
    };

    elementsExists() {
        this.header().should('be.visible');
        this.dataAgreement().should('be.visible');
    };
    labelsAreCorrect() {
      this.header().should('have.text', 'Terms of Service');
      this.dataAgreement().should('contain.text', '21/03/2021');
    };
};

export default TOSPage
