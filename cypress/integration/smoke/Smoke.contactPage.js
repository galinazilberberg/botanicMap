import ContactPage from "../../support/pageObjects/contact.page";
import Page from "../../support/pageObjects/page";
import LoginPage from "../../support/pageObjects/login.page";
import { user } from "../../support/data/test.data"
import data from "../../fixtures/example.json";

const page = new Page();
const contactPage = new ContactPage();
const loginPage = new LoginPage()

describe('smoke testing for contact page', () => {

    before(() => {
        contactPage.open();
    });

    describe('Role GUEST', () => {

        it('Elements exists', () => {
            page.topMenuGuestExists();
            contactPage.elementsExists();
        });

        it('Labels are correct', () => {
            page.topMenuGuestLabelsCorrect();
            contactPage.labelsAreCorrect();
        });

        it('Submit button enabled after required fields filled in', () => {
            contactPage.btnSubmit(user.firstName, user.email, user.password, 'Some text')
        });
    });

    describe.only('Role USER', () => {

       before(() => {
           loginPage.open();
           loginPage.userLogin(data.userEmail, data.userPassword);
           cy.wait(500);
           contactPage.open();
       });

        it('Elements exists USER', () => {
            page.topMenuUserExists();
            contactPage.elementsExists();
        });

        it('Labels are correct USER ',  () => {
            page.topMenuUserLabelsCorrect();
            contactPage.labelsAreCorrect();
        });

        it('Submit button enabled after required fields filled in', () => {
            contactPage.btnSubmit(user.firstName, user.email, user.password, 'Some text')
        });
    });
});
