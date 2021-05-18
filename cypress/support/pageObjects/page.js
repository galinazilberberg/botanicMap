export default class Page {
    linkHeader() {return cy.get('.container')};
    linkPlant() {return cy.get('//a[contains(text(),\'Plant\')]')};
    linkHardinessZone() {return cy.get('//a[contains(text(),\'HardinessZone\')]')}
    linkLogin() {return cy.get('.mr-4')};
    linkSignUp() {return cy.get('.register-button')};
    linkContact() {return cy.get('//a[contains(text(),\'Contact\')]')};
    linkSubscribe() {return cy.get('//a[contains(text(),\'Subscribe\')]')};
    linkFAQ() {return cy.get('//a[contains(text(),\'FAQ\')]')};
    linkToS() {return cy.get('//b[contains(text(),\'Terms of Service\')]')};
    linkPP() {return cy.get('//b[contains(text(),\'Privacy Policy\')]')};
    dropDownMenu() {return cy.get('.ant-dropdown-link')};
    header() {return cy.get('.jumbo-title')};
    BtnGetStarted() {return cy.get('.ant-btn-primary')};

    // clearInput(element){
    //     const value =  cy.element.getValue();
    //     for(let i = 0; i < value.length; i++){
    //         await element.keys(['Backspace']);
    //     }
}
