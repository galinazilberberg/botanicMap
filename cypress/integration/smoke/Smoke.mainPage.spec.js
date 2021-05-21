import  Page  from '../../support/pageObjects/page';
import RegisterPage from '../../support/pageObjects/register.Page';
import LoginPage from '../../support/pageObjects/login.page';

describe('Smoke tests for main page', () => {

    const page = new Page();
    const registerPage = new RegisterPage();
    const loginPage = new LoginPage();

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

    describe.only('Role USER', () => {

        before('Login as User', () => {
            loginPage.open();
            loginPage.userLogin('euphratus.tk@gmail.com', 'doc1020');
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