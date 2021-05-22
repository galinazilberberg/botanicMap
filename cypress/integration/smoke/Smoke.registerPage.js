import RegisterPage from "../../support/pageObjects/register.Page";
import {user} from "../../support/data/test.data";

const registerPage = new RegisterPage();

describe('Smoke testing for Register Page', () => {

    before(() => {
        registerPage.open();
    }) ;

    it('Elements exists', () => {
        registerPage.elementsExists();
    });

    it('Labels are correct', () => {
        registerPage.labelsAreCorrect();
    });

    it('Submit button enabled after filling required fields', () => {
        registerPage.submitButtonIsEnabled('User', 'User', user.email, user.password);
    });
});
