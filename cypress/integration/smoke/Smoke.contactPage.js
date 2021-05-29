import ContactPage from "../../support/pageObjects/contact.page";
import LoginPage from "../../support/pageObjects/login.page";
import data from "../../fixtures/example.json";

const contactPage = new ContactPage();
const loginPage = new LoginPage();

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
           loginPage.open();
           loginPage.userLogin(data.userEmail, data.userPassword);
           cy.wait(500);
           contactPage.open();
       });

        it('Elements exists USER', () => {
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
