/// <reference types="cypress" />

import General_Pom from "../POMs/General_Pom"
import LoginPage from "../POMs/Login_page"
import Dashloard from "../POMs/dashboard"

const login = new LoginPage()
const general_pom = new General_Pom()
const dashboard = new Dashloard()

context('Login and Alert box', () => {
  let userData
  before(() => {
    cy.visit('https://demo.opencart.com/admin/index.php?route=common/login')

    
    cy.fixture('example.json').then((data) =>{

      userData = data

    })

   

    //Asserting the name field has no value and type invalid user name
    login.userNameField()
    .should('be.visible')
    .should('be.empty')
    .type('demo')

  //Asserting the password field has no value and type invalid password 
  login.userPasswordField()
    .should('be.visible')
    .should('be.empty')
    .type('demo')

  //Asserting login button is displayed, has text login and is clickable
  login.loginButton()
    .should('be.visible')
    .click()

  //Waiting for the alert box to be diplayed
  cy.wait(2000)

  cy.on('uncaught:exception', (err, runnable) => {

    // Catch and Log the uncaught exception
    console.error('Uncaught exception:', err.message);
  
    //Prevents the error from failing the test
    return false;
});


  //Validating the input box element 
  /*
  login.HomeAlertBoxInputField()
    .should('be.visible')
    .click()
    .should('have.attr', 'placeholder', 'Directory Name')
    .clear()
    .type('clifford')

    

  //Validating the Rename button element
  login.HomeAlertRenameButton()
    .should('be.visible')
    .should('have.css', 'background-color', 'rgb(227, 80, 62)')
    .click()

  //Verifying the warning element is displayed after clicking rename
  login.HomeAlertWarningText()
  .should('be.visible')

  //Asserting the display of warning message when trying to rename directory without right permision
  cy.xpath('//*[@id="alert"]/div/text()')
    .should('contain.text', 'Warning: You do not have permission to modify security!')


  //Asserting the 'Rename admin directory' title is present and is clickable
  cy.xpath('//*[@id="security-admin"]/h2/button')
    .should('be.visible')
    .click()
    */

  //Waiting for the warning message to fade off before clicking the window close button
  cy.wait(3000)

  //Verifying the window close button is displayed and closes the alert box when clicked
  cy.xpath('//*[@id="modal-security"]/div/div/div[1]/button')
    .should('be.visible')
    .click()

  //Asserting the Alert box is closed after clicking
  cy.xpath('//*[@id="modal-security"]/div/div/div[1]/button')
    .should('not.be.visible')

  })


  


  describe('Validating Dashboard Functionality', () => {

  

    it.only('renders fixtures data', () =>{ // needs reviewing to work best in login test suit
      data.forEach((userData)=> {
        
      });
    

        dashboard.dashboardHeading().should('have.text', userData.Dashboard_Title)


    } )


    it('Validating Hearder Elements', () => {

        //***Verifying Logo Element
        general_pom.opencartLogo()
        .should('be.visible')
        .trigger('mouseover')
        .click()

        //Asserting the Alert box is displayed after clicking on logo
       login.HomeAlertBoxInputField()
       .should('be.visible')

       //Closing off the Alert box
      cy.xpath('//*[@id="modal-security"]/div/div/div[1]/button')
      .should('be.visible')
      .click()


      //***Verifying The Notification bell
      dashboard.notificationBell()
      //.should('be.visible')
      .trigger('mouseover')
      .click()

      dashboard.notificationBellText()
      .should('be.visible')
      .should('contain.text', 'No results!')

      //Validating the dashboard heading
      dashboard.dashboardHeading()

    

})

it('valdiating the navigation sidebar', () => {
   
  dashboard.navigationSideBar()
})
})
})
