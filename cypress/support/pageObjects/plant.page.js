import Page from "./page";

class PlantPage extends Page{
    header = () => cy.get('.h4');
    fieldPlantSearchParam1 = () => cy.xpath('//input[@id=\'plantSearchParam1\']');
    fieldPlantSearchParam2 = () => cy.xpath('//input[@id=\'plantSearchParam2\']');
    columnLabels = () => cy.get('.ant-table-thead');
    iconEdit = () => cy.get('.edit-pen-icon');
    iconDropdownMenu = () => cy.get('.ant-dropdown-trigger');
    btnReset = () => cy.xpath('//span[contains(text(),\'Reset\')]');
    btnCreatePlant = () => cy.get('.ant-btn-primary');
    createPlantHeader = () => cy.get

    open() {
        cy.visit('/plant');
    }

    elementsExists() {
        this.header().should('be.visible');
        this.fieldPlantSearchParam1().should('be.visible');
        this.fieldPlantSearchParam2().should('be.visible');
        this.columnLabels().should('be.visible');
        this.iconEdit().should('be.visible');
        this.iconDropdownMenu().should('be.visible');
        this.btnReset().should('be.visible');
        this.btnCreatePlant().should('be.visible');
    };

    labelsAreCorrect() {
        this.header().should('have.text', 'Plant dashboard');
        this.fieldPlantSearchParam1().should('have.attr', 'placeholder', 'plantSearchParam1');
        this.fieldPlantSearchParam2().should('have.attr', 'placeholder', 'plantSearchParam2');
        this.columnLabels().should('contain.text','Name' + 'Types' + 'Hardiness Zone' + 'Description' + 'Location' + 'Action');
        this.btnReset().should('have.text', 'Reset');
        this.btnCreatePlant().should('have.text', 'Create Plant');
    };


}

export default PlantPage
