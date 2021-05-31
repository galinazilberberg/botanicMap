import ResetPasswordPage from "../../support/pageObjects/resetPassword.page";
import data from '../../fixtures/example.json';

const resetPasswordPage = new ResetPasswordPage();

describe('Smoke testing for Reset password page', () => {

    before(() => {
        resetPasswordPage.open();
    });

    it('Elements exists', () => {
        resetPasswordPage.elementsExists();
    });

    it('Labels are correct', () => {
        resetPasswordPage.labelsAreCorrect();
    });

    it('Submit button enabled after required field is filled in', () => {
        resetPasswordPage.submitBtnEnabled(data.userEmail);
    });
});
