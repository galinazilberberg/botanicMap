import FAQPage from "../../support/pageObjects/FAQ.Page";
import data from "../../fixtures/example.json";

const faqPage = new FAQPage();

describe('Smoke testing fo FAQ page', () => {

    describe('Role GUEST', () => {

        before(() => {
            faqPage.open();
        });

        it('Elements exists', () => {
            faqPage.topMenuGuestExists();
            faqPage.elementsExists();
            // faqPage.footerExist();
        });

        it('Labels are correct', () => {
            faqPage.topMenuGuestLabelsCorrect();
            faqPage.labelsAreCorrect();
            // faqPage.footerLabelsAreCorrect();
        });

        it('Submit button is enabled', () => {
           faqPage.submitBtnEnabled('Some text');
        });
    });

    describe('Role USER', () => {

        before(() => {
         cy.login(data.userEmail, data.userPassword);
         faqPage.open();
       });

        it('Elements exists', () => {
            faqPage.topMenuUserExists();
            faqPage.elementsExists();
            // faqPage.footerExist();
        });

        it('Labels are correct', () => {
            faqPage.topMenuUserLabelsCorrect();
            faqPage.labelsAreCorrect();
            // faqPage.footerLabelsAreCorrect();
        });

        it('Submit button is enabled', () => {
            faqPage.submitBtnEnabled('Some text');
        });
    });
});
