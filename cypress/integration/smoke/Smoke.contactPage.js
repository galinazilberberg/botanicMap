import ContactPage from "../../support/pageObjects/contact.page";
import Page from "../../support/pageObjects/page";
import LoginPage from "../../support/pageObjects/login.page";
import data from "../../fixtures/example.json";

const page = new Page();
const contactPage = new ContactPage();
const loginPage = new LoginPage();

describe('smoke testing for contact page', () => {

    before(() => {
        contactPage.open();
    });

    describe('Role GUEST', () => {

        it('Elements exists', () => {
            page.topMenuGuestExists();
            contactPage.elementsExists();
            page.footerExist();
        });

        it('Labels are correct', () => {
            page.topMenuGuestLabelsCorrect();
            contactPage.labelsAreCorrect();
            page.footerLabelsAreCorrect();
        });

        it('Submit button enabled after required fields filled in', () => {
            contactPage.submitBtnEnabled(data.userFirstName, data.userEmail, data.userPassword, 'Some text')
        });
    });

    describe('Role USER', () => {

       before(() => {
           loginPage.open();
           loginPage.userLogin(data.userEmail, data.userPassword);
           cy.wait(500);
           contactPage.open();
       });

        it('Elements exists USER', () => {
            page.topMenuUserExists();
            contactPage.elementsExists();
            page.footerExist();
        });

        it('Labels are correct USER ',  () => {
            page.topMenuUserLabelsCorrect();
            contactPage.labelsAreCorrect();
            page.footerLabelsAreCorrect();
        });

        it('Submit button enabled after required fields filled in', () => {
            contactPage.submitBtnEnabled(data.userFirstName, data.userEmail, data.userPassword, 'Some text')
        });
    });
});
