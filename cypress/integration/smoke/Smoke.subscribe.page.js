import SubscribePage from "../../support/pageObjects/subscribe.page";
import LoginPage from "../../support/pageObjects/login.page";
import data from "../../fixtures/example.json";

const subscribePage = new SubscribePage();
const loginPage = new LoginPage();

describe('Smoke testing for subscribe page', () => {

    before(() => {
        subscribePage.open();
    });

    describe('Role GUEST', () => {

        it('elements exists', () => {
            subscribePage.topMenuGuestExists();
            subscribePage.elementsExists();
            subscribePage.footerExist();
        });

        it('Labels are correct', () => {
            subscribePage.topMenuGuestLabelsCorrect();
            subscribePage.labelsAreCorrect();
            subscribePage.footerLabelsAreCorrect();
        });

        it('Submit button is enabled after email field filled in with valid data', () => {
           subscribePage.submitBtnIsEnabled(data.userEmail);
        });

    });

    describe('Role User', () => {

        before(() => {
            loginPage.open();
            loginPage.userLogin(data.userEmail, data.userPassword);
            cy.wait(1000);
            subscribePage.open();
            subscribePage.isOpen();
            //cy.login(data.userEmail, data.userPassword);
        });

        it('elements exists', () => {
            subscribePage.topMenuUserExists();
            subscribePage.elementsExists();
            subscribePage.footerExist();
        });

        it('Labels are correct', () => {
            subscribePage.topMenuUserLabelsCorrect();
            subscribePage.labelsAreCorrect();
            subscribePage.footerLabelsAreCorrect();
        });

        it('Submit button is enabled after email field filled in with valid data', () => {
            subscribePage.submitBtnIsEnabled(data.userEmail);
        });
    });
});
