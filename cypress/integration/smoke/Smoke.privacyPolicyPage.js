import PPPage from "../../support/pageObjects/privacyPolicy.page";
import data from "../../fixtures/example.json";

const ppPage = new PPPage();

describe('Smoke testing for Privacy policy page page', () => {

    describe('Role GUEST', () => {

        before(() => {
            ppPage.open();
        });

        it('Elements exists',  () => {
            ppPage.topMenuGuestExists();
            ppPage.elementsExists();
            ppPage.footerExist();
        });

        it('Labels are correct', () => {
            ppPage.topMenuGuestLabelsCorrect();
            ppPage.elementsExists();
            ppPage.footerLabelsAreCorrect();
        });
    });

    describe('Role USER', () => {

        before(() => {
            cy.login(data.userEmail, data.userPassword);
            ppPage.open();
        });

        it('Elements exists',  () => {
            ppPage.topMenuUserExists();
            ppPage.elementsExists();
            ppPage.footerExist();
        });

        it('Labels are correct', () => {
            ppPage.topMenuUserLabelsCorrect();
            ppPage.elementsExists();
            ppPage.footerLabelsAreCorrect();
        });
    });
});

