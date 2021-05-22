import LoginPage from "../../support/pageObjects/login.page";
import {user} from "../../support/data/test.data";

const loginPage = new LoginPage();

describe('Smoke tests for login page', () => {

    before(() => {
        loginPage.open();
    });

    it('Elements exists', () => {
        loginPage.elementsExists();
    });

    it('Labels are correct', () => {
        loginPage.labelsAreCorrect();
    });

    it('Submit button is enabled', () => {
        loginPage.submitBtnIsEnabled(user.email, user.password);
    });
})