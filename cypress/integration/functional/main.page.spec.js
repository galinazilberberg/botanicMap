import  Page  from '../../support/pageObjects/page';
import RegisterPage from '../../support/pageObjects/register.Page';
import LoginPage from '../../support/pageObjects/login.page';
import ContactPage from "../../support/pageObjects/contact.page";
import SubscribePage from "../../support/pageObjects/subscribe.page";
import FAQPage from "../../support/pageObjects/FAQ.Page";
import TOSPage from "../../support/pageObjects/termsOfService.page";
import PPPage from "../../support/pageObjects/PrivacyPolicy.page";

describe('Functional tests for main page', () => {

    const page = new Page();
    const registerPage = new RegisterPage();
    const loginPage = new LoginPage();
    const contactPage = new ContactPage();
    const subscribePage = new SubscribePage();
    const faqPage = new FAQPage();
    const tosPage = new TOSPage();
    const ppPage = new PPPage();

    before('main page open', () => {
        page.navigate();
    });

    describe('Role GUEST', () => {

        beforeEach(() => {
            page.navigate();
        });

        it('Navigation => login Page', () => {
            page.goToLoginPage();
            loginPage.isOpen();
        });

        it('Navigation => register Pge', () => {
            page.goToRegisterPage();
            registerPage.isOpen();
        });

        it('Navigation => contact Page', () => {
           cy.contains('Contact').click();
            contactPage.isOpen();
        });

        it('Navigation => Subscribe Page', () => {
            cy.contains('Subscribe').click();
            subscribePage.isOpen();
        });

        it('Navigation => FAQ Pge', () => {
            cy.contains('FAQ').click();
            faqPage.isOpen();
        });

        it('Navigation => Terms of service Page', () => {
            page.goToToSPage();
            tosPage.isOpen();
        });

        it('Navigation => Privacy Policy Page', () => {
            page.goToPPPage();
            ppPage.isOpen();
        });
    });
});