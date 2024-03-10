/// <reference types="cypress" />

describe('Validating login functionality', ()=>{
    beforeEach(() => {
        cy.visit('https://demo.opencart.com/admin/')
      })



      it('Negative testing with invalid user name and password', ()=>{

        //Asserting the name field has no value and type invalid user name
        cy.get('#input-username')
        .should('be.visible')
        .should('be.empty')
        .type('invalidusername')

        //Asserting the password field has no value and type invalid password 
        cy.get('#input-password')
        .should('be.visible')
        .should('be.empty')
        .type('invalidpassword')


        cy.wait(1000)

      
        //Validating the login button and error message
        let currentUrl;
        cy.url().then(url => {
          currentUrl = url

        //Asserting login button is displayed, has text login and is clickable
        cy.xpath("//i[@class='fas fa-key']")
        .should('be.visible')
        .click()


        // 1st verification point!; Asserting the error message is displayed
       cy.get('#alert')
       .should('be.visible')
       //.should('have.css', 'background-color', '#883025')
       .should('contain.text', 'No match for Username and/or Password.')


        //2nd Verification point!; Asserting we are still on current url after clicking
        cy.url().should('eq', currentUrl);
        
        });


      } )



      it('Negative testing with valid user name and invalid password', ()=>{

        //Asserting the name field has no value and type invalid user name
        cy.get('#input-username')
        .should('be.visible')
        .should('be.empty')
        .type('demo')

        //Asserting the password field has no value and type invalid password 
        cy.get('#input-password')
        .should('be.visible')
        .should('be.empty')
        .type('invalidpassword')

      
        //Validating the login button and error message
        let currentUrl;
        cy.url().then(url => {
          currentUrl = url

        //Asserting login button is displayed, has text login and is clickable
        cy.xpath("//i[@class='fas fa-key']")
        .should('be.visible')
        .click()


        // 1st verification point!; Asserting the error message is displayed
       cy.get('#alert')
       .should('be.visible')
       //.should('have.css', 'background-color', '#883025')
       .should('contain.text', 'No match for Username and/or Password.')


        //2nd Verification point!; Asserting we are still on current url after clicking
        cy.url().should('eq', currentUrl);
        
        });


      } )


      it('Negative testing with invalid user name and valid password', ()=>{

        //Asserting the name field has no value and type invalid user name
        cy.get('#input-username')
        .should('be.visible')
        .should('be.empty')
        .type('invalidusername')

        //Asserting the password field has no value and type invalid password 
        cy.get('#input-password')
        .should('be.visible')
        .should('be.empty')
        .type('demo')

      
        //Validating the login button and error message
        let currentUrl;
        cy.url().then(url => {
          currentUrl = url

        //Asserting login button is displayed, has text login and is clickable
        cy.xpath("//i[@class='fas fa-key']")
        .should('be.visible')
        .click()


        // 1st verification point!; Asserting the error message is displayed
       cy.get('#alert')
       .should('be.visible')
       //.should('have.css', 'background-color', '#883025')
       .should('contain.text', 'No match for Username and/or Password.')


        //2nd Verification point!; Asserting we are still on current url after clicking
        cy.url().should('eq', currentUrl);
        
        });



      } )



/*
      
      it('Negative testing with valid user name and valid password', ()=>{

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

      
        //Validating the login button and error message
        let currentUrl;
        cy.url().then(url => {
          currentUrl = url

        //Asserting login button is displayed, has text login and is clickable
        cy.xpath("//i[@class='fas fa-key']")
        .should('be.visible')
        .click()


        // 1st verification point!; Asserting the error message is displayed
       cy.get('#alert')
       .should('be.visible')
       //.should('have.css', 'background-color', '#883025')
       .should('contain.text', 'No match for Username and/or Password.')


        //2nd Verification point!; Asserting we are still on current url after clicking
        cy.url().should('eq', currentUrl);
        
        });



      } )
      */




      
      it('Validating the Forgot password element', ()=>{

        //Asserting the name field has no value and type invalid user name
        //cy.go('back')
        cy.xpath("//a[contains(text(),'Forgotten Password')]")
        .should('be.visible')
        .should('contain.text', 'Forgotten Password')
        .click()
        



      } )




})

