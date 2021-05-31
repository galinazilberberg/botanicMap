import RegisterPage from "../../support/pageObjects/register.Page";
import data from "../../fixtures/example.json";

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
        registerPage.submitButtonIsEnabled(data.userFirstName, data.userLastName, data.userEmail, data.userPassword);
    });
});
