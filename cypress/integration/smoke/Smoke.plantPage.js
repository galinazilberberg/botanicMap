import PlantPage from "../../support/pageObjects/plant.page";
import data from "../../fixtures/example.json";

const plantPage = new PlantPage();

describe('Smoke testing for Plant page', () => {
   before(() => {
       cy.login(data.userEmail, data.userPassword);
       plantPage.open();
   });

});