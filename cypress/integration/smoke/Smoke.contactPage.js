import ContactPage from "../../support/pageObjects/contact.page";
import LoginPage from "../../support/pageObjects/login.page";
import data from "../../fixtures/example.json";
import Page from "../../support/pageObjects/page";

const contactPage = new ContactPage();
const loginPage = new LoginPage();
const page = new Page();

describe('smoke testing for contact page', () => {

    before(() => {
        contactPage.open();
    });

    describe('Role GUEST', () => {

        it('Elements exists', () => {
            contactPage.topMenuGuestExists();
            contactPage.elementsExists();
            contactPage.footerExist();
        });

        it('Labels are correct', () => {
            contactPage.topMenuGuestLabelsCorrect();
            contactPage.labelsAreCorrect();
            contactPage.footerLabelsAreCorrect();
        });

        it('Submit button enabled after required fields filled in', () => {
            contactPage.submitBtnEnabled(data.userFirstName, data.userEmail, data.userPassword, 'Some text')
        });
    });

    describe('Role USER', () => {

        before(() => {
            cy.login(data.userEmail, data.userPassword);
            page.isOpen();
            contactPage.open();
       });

        it('Elements exists USER', () => {
            contactPage.open();
            contactPage.topMenuUserExists();
            contactPage.elementsExists();
            contactPage.footerExist();
        });

        it('Labels are correct USER ',  () => {
            contactPage.topMenuUserLabelsCorrect();
            contactPage.labelsAreCorrect();
            contactPage.footerLabelsAreCorrect();
        });

        it('Submit button enabled after required fields filled in', () => {
            contactPage.submitBtnEnabled(data.userFirstName, data.userEmail, data.userPassword, 'Some text')
        });
    });
});
