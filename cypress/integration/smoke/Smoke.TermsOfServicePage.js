import TOSPage from "../../support/pageObjects/termsOfService.page";
import data from "../../fixtures/example.json";

const tosPage = new TOSPage();

describe('Smoke testing for Terms of Service page', () => {

    describe('Role GUEST', () => {

        before(() => {
           tosPage.open();
        });

        it('Elements exists',  () => {
            tosPage.topMenuGuestExists();
            tosPage.elementsExists();
            tosPage.footerExist();
        });

        it('Labels are correct', () => {
            tosPage.topMenuGuestLabelsCorrect();
            tosPage.elementsExists();
            tosPage.footerLabelsAreCorrect();
        });
    });

    describe('Role USER', () => {

        before(() => {
            cy.login(data.userEmail, data.userPassword);
            tosPage.open();
        });

        it('Elements exists',  () => {
            tosPage.topMenuUserExists();
            tosPage.elementsExists();
            tosPage.footerExist();
        });

        it('Labels are correct', () => {
            tosPage.topMenuUserLabelsCorrect();
            tosPage.elementsExists();
            tosPage.footerLabelsAreCorrect();
        });
    });
});
