export default class Page {

    navBar = () => cy.get('.navbar-brand');
    linkMainPage = () => cy.get('.site-name');
    brandName = () => cy.get('.navbar-brand');
    linkPlant = () => cy.get('#top-menu');
    linkHardinessZone = () => cy.get('#top-menu');
    linkLogin = () => cy.get('.mr-4');
    linkSignUp = () => cy.get('.register-button');
    linkContact = () => cy.get('.mt-auto [class=\'me-2\']:nth-of-type(1)');
    linkSubscribe = () => cy.get('.mt-auto [class=\'me-2\']:nth-of-type(2)');
    linkFAQ = () => cy.get('.mt-auto [class=\'me-2\']:nth-of-type(3)');
    linkToS = () => cy.get('[data-qa="footerTerms"]');
    linkPP = () => cy.get('a.ms-4');
    dropDownMenu = () => cy.get('.ant-dropdown-link');
    header = () => cy.get('.jumbo-title');
    btnGetStarted = () => cy.get('.ant-btn-primary');

    navigate() {
        cy.visit('')
    };

    isOpen() {
        this.navBar().should('be.visible');
    }

    topMenuGuestExists() {
        this.brandName().should('be.visible');
        this.linkLogin().should('be.visible');
        this.linkSignUp().should('be.visible');
    };

    topMenuUserExists() {
        this.brandName().should('be.visible');
        this.linkPlant([0]).should('be.visible');
        this.linkHardinessZone([1]).should('be.visible');
        this.dropDownMenu().should('be.visible');
    };

    topMenuGuestLabelsCorrect() {
        this.brandName().should('include.text', 'BotanicMap');
        this.linkLogin().should('include.text', 'Log In');
        this.linkSignUp().should('include.text', 'Sign Up');
    };

    topMenuUserLabelsCorrect() {
        this.brandName().should('include.text', 'BotanicMap');
        this.linkPlant([0]).should('include.text', 'Plant');
        this.linkHardinessZone([1]).should('include.text', 'HardinessZone');
        this.dropDownMenu().should('include.text', 'Tanya Karsova')
    };


    elementsExistsGuest() {
        this.brandName().should('be.visible');
        this.linkLogin().should('be.visible');
        this.linkSignUp().should('be.visible');
        this.header().should('be.visible');
        this.btnGetStarted().should('be.visible');
    };

    elementsExistsUser() {
        this.brandName().should('be.visible');
        this.linkPlant([0]).should('be.visible');
        this.linkHardinessZone([1]).should('be.visible');
        this.header().should('be.visible');
        this.dropDownMenu().should('be.visible');
    };

    footerExist() {
        this.linkContact([0]).should('be.visible');
        this.linkSubscribe([1]).should('be.visible');
        this.linkFAQ([2]).should('be.visible');
        this.linkToS().should('be.visible');
        this.linkPP().should('be.visible');
    };

    rightFooterExists() {
        this.linkToS().should('be.visible');
        this.linkPP().should('be.visible');
    };

    footerLabelsAreCorrect() {
        this.linkContact([0]).should('include.text', 'Contact');
        this.linkSubscribe([1]).should('include.text', 'Subscribe');
        this.linkFAQ([2]).should('include.text', 'FAQ');
        this.linkToS().should('have.text', 'Terms of Service');
        this.linkPP().should('have.text', 'Privacy Policy');
    };

    rightFooterLabelsAreCorrect() {
        this.linkToS().should('have.text', 'Terms of Service');
        this.linkPP().should('have.text', 'Privacy Policy');
    };

    labelsAreCorrectGuest() {
        this.brandName().should('include.text', 'BotanicMap');
        this.linkLogin().should('include.text', 'Log In');
        this.linkSignUp().should('include.text', 'Sign Up');
        this.header().should('include.text', 'Right plant, Right Place' + 'Growing plants in your location');
        this.btnGetStarted().should('include.text', 'Get started');
    };

    labelsAreCorrectUser() {
        this.brandName().should('include.text', 'BotanicMap');
        this.linkPlant([0]).should('include.text', 'Plant');
        this.linkHardinessZone([1]).should('include.text', 'HardinessZone');
        this.dropDownMenu().should('include.text', 'Tanya Karsova')
        this.header().should('include.text', 'Right plant, Right Place' + 'Growing plants in your location');
    };

    getStartedBtnIsClickable() {
      this.btnGetStarted().click();
    };

    goToLoginPage() {
        this.linkLogin().click();
    };

    goToRegisterPage() {
        this.linkSignUp().click();
    };

    goToPlantPage() {
        this.linkPlant().click();
    };

    goToHardinessZonePage() {
        this.linkHardinessZone().click();
    };

    goToToSPage() {
        this.linkToS().click();
    }

    goToPPPage() {
        this.linkPP().click();
    }

}
