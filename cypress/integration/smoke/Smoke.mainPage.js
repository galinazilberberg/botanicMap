import  Page  from '../../support/pageObjects/page';
import RegisterPage from '../../support/pageObjects/register.Page';
import data from '../../fixtures/example.json'

const page = new Page();
const registerPage = new RegisterPage();

describe('Smoke tests for main page', () => {

    before(() => {
        page.navigate();
    });
    describe('Role GUEST', () => {

        it('elements exists', function () {
            page.elementsExistsGuest();
            page.footerExist();
        });

        it('Labels are correct', () => {
            page.labelsAreCorrectGuest();
            page.footerLabelsAreCorrect();
        });

        it('Get started button redirects to the login page', () => {
           page.getStartedBtnIsClickable();
           registerPage.isOpen();
        });
    });

    describe('Role USER', () => {

        before('Login as User', () => {
            cy.login(data.userEmail, data.userPassword);
            page.isOpen();
            page.navigate();
        });

        it('elements exists',  () => {
            page.elementsExistsUser();
            page.footerExist();
        });

        it('Labels are correct', () => {
            page.labelsAreCorrectUser();
            page.footerLabelsAreCorrect();
        });
    });
});
