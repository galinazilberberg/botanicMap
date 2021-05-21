import milliseconds from "mocha/lib/ms";

export default class Page {
    linkHeader = () => cy.get('.container');
    linkPlant = () => cy.get('//a[contains(text(),\'Plant\')]');
    linkHardinessZone = () => cy.get('//a[contains(text(),\'HardinessZone\')]');
    linkLogin = () => cy.get('.mr-4');
    linkSignUp = () => cy.get('.register-button');
    linkContact = () => cy.get('//a[contains(text(),\'Contact\')]');
    linkSubscribe = () => cy.get('//a[contains(text(),\'Subscribe\')]');
    linkFAQ = () => cy.get('//a[contains(text(),\'FAQ\')]');
    linkToS = () => cy.get('//b[contains(text(),\'Terms of Service\')]');
    linkPP = () => cy.get('//b[contains(text(),\'Privacy Policy\')]');
    dropDownMenu = () => cy.get('.ant-dropdown-link');
    header = () => cy.get('.jumbo-title');
    btnGetStarted = () => cy.get('.ant-btn-primary');

    navigate() {
        cy.visit('')
    };

    elementsBeforeLoginExists() {
        this.linkHeader().should('be.visible');
        this.linkLogin().should('be.visible');
        this.linkSignUp().should('be.visible');
        this.header().should('be.visible');
        this.btnGetStarted().should('be.visible');
    };

    elementsAfterLoginExists() {
        this.linkHeader().should('be.visible');
        this.linkPlant().should('be.visible');
        this.linkHardinessZone().should('be.visible');
        this.dropDownMenu().should('be.visible');
    };

    footerExist() {
        this.linkContact().should('be.visible');
        this.linkSubscribe().should('be.visible');
        this.linkFAQ().should('be.visible');
        this.linkToS().should('be.visible');
        this.linkPP().should('be.visible');
    };

}
