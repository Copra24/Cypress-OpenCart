/// <reference types="cypress" />

context('Reports', () => {

    beforeEach(() => {
      cy.visit('https://demo.opencart.com/admin/index.php?route=common/login')


      cy.on('uncaught:exception', (err, runnable) => {

        // Log the uncaught exception
        console.error('Uncaught exception:', err.message);
      
        // Optionally, prevent the error from failing the test
        return false;
      });


        //Asserting the name field has no value and type invalid user name
        cy.get('#input-username')
        .should('be.visible')
        .should('be.empty')
        .type('demo')
      
        //Asserting the password field has no value and type invalid password 
        cy.get('#input-password')
        .should('be.visible')
        .should('be.empty')
        .type('demo')
      
        //Asserting login button is displayed, has text login and is clickable
        cy.xpath("//i[@class='fas fa-key']")
        .should('be.visible')
        .click()
      
         //Waiting for the alert box to be diplayed
         cy.wait(2000)
      
         //Validating the input box element 
        cy.xpath('//*[@id="form-admin"]/div[1]/div/input')
        .should('be.visible')
        .click()
        .should('have.attr', 'placeholder', 'Directory Name')
        .clear()
        .type('clifford')
      
        //Validating the Rename button element
        cy.xpath('//*[@id="button-admin"]')
        .should('be.visible')
        .should('have.css', 'background-color', 'rgb(227, 80, 62)')
        .click()
      
      //Verifying the warning element is displayed after clicking rename
        cy.xpath('//*[@id="alert"]/div/i')
        .should('be.visible')
      
      //Asserting the display of warning message when trying to rename directory without right permision
        cy.xpath('//*[@id="alert"]/div/text()')
        .should('contain.text', 'Warning: You do not have permission to modify security!')
        
        
      //Asserting the 'Rename admin directory' title is present and is clickable
        cy.xpath('//*[@id="security-admin"]/h2/button')
        .should('be.visible')
        .click()
      
       //Waiting for the warning message to fade off before clicking the window close button
        cy.wait(3000)
      
        //Verifying the window close button is displayed and closes the alert box when clicked
        cy.xpath('//*[@id="modal-security"]/div/div/div[1]/button')
        .should('be.visible')
        .click()
      
        //Asserting the 'window close button' is displayed and closes alert box when clicked
        cy.xpath('//*[@id="modal-security"]/div/div/div[1]/button')
        .should('not.be.visible')
      
      
     
      
        /*

    describe('Validating report Functionality', ()=>{

        it('Negative testing with invalid user name and password', ()=>{

            cy.get('table tbody tr').each(($row) => {
                // Extract data from each cell in the row
                cy.wrap($row).find('td').eq(0).invoke('text').then((orderSales) => {
                  // Perform assertions or actions with the order sales data
                  // For example:
                  cy.log(`Order Sales: ${orderSales}`);
                });
              
                // Repeat this for each column in the row as needed
              });









        })
        */


    })
})  