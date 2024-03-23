/// <reference types="cypress" />

import LoginPage from "../POMs/Login_page"
import General_Pom from "../POMs/General_Pom"

const login = new LoginPage()
const general_pom = new General_Pom()

context('Login and Alert box', () => {
  beforeEach(() => {
    cy.visit('https://demo.opencart.com/admin/index.php?route=common/login')

    
  })
  
  

  describe('Validating login functionality', () => {

    // it('render navigation menu', () => {
    //   cy.visit('/menu')
    //   cy.get('#menu-catalog').find('li').first()
    //   .should('not.have.class', 'active')
    // })

    it('Footer and Logo Validation', () => {

       //***Verifying Logo Element
     general_pom.opencartLogo()
     .should('be.visible')
     .trigger('mouseover')
     .click()

     //After clicking, login page should still be displayed
     login.userNameField()
     .should('be.visible')

    //Validates the copyright text
     general_pom.copyrightText()
     
     //Validats Footer Url
     general_pom.opencartFooterUrl()

      //Retruns to Login page
      cy.go("back")


    })


    it('Negative testing with invalid user name and password', () => {

      //Asserting the name field has no value and type invalid user name   https://demo.opencart.com/admin/index.php?route=common/login
      login.userNameField()
        .should('be.visible')
        .should('be.empty')
        .type('invalidusername')

      //Asserting the password field has no value and type invalid password 
      login.userPasswordField()
        .should('be.visible')
        .should('be.empty')
        .type('invalidpassword')

      //Validating the login button and error message
      let currentUrl;
      cy.url().then(url => {
        currentUrl = url
        console.log('This is the !!!' + currentUrl)

        //Asserting login button is displayed, has text login and is clickable
        login.loginButton()
          .should('be.visible')
          .click()


        // 1st verification point!; Asserting the error message is displayed
        login.alertMessage()
          .should('be.visible')
          //.should('have.css', 'background-color', '#883025')
          .should('contain.text', 'No match for Username and/or Password.')


        //2nd Verification point!; Asserting we are still on current url after clicking
        cy.url().should('eq', currentUrl);



      });


    })



    it('Negative testing with valid user name and invalid password', () => {

      //Asserting the name field has no value and type invalid user name
      login.userNameField()
        .should('be.visible')
        .should('be.empty')
        .type('demo')

      //Asserting the password field has no value and type invalid password 
      login.userPasswordField()
        .should('be.visible')
        .should('be.empty')
        .type('invalidpassword')


      //Validating the login button and error message
      let currentUrl;
      cy.url().then(url => {
        currentUrl = url

        //Asserting login button is displayed, has text login and is clickable
        login.loginButton()
          .should('be.visible')
          .click()


        // 1st verification point!; Asserting the error message is displayed
        login.alertMessage()
          .should('be.visible')
          //.should('have.css', 'background-color', '#883025')
          .should('contain.text', 'No match for Username and/or Password.')


        //2nd Verification point!; Asserting we are still on current url after clicking
        cy.url().should('eq', currentUrl);

      });


    })


    it('Negative testing with invalid user name and valid password', () => {

      //Asserting the name field has no value and type invalid user name
      login.userNameField()
        .should('be.visible')
        .should('be.empty')
        .type('invalidusername')

      //Asserting the password field has no value and type invalid password 
      login.userPasswordField()
        .should('be.visible')
        .should('be.empty')
        .type('demo')


      //Validating the login button and error message
      let currentUrl;
      cy.url().then(url => {
        currentUrl = url

        //Asserting login button is displayed, has text login and is clickable
        login.loginButton()
          .should('be.visible')
          .click()


        // 1st verification point!; Asserting the error message is displayed
       login.alertMessage()
          .should('be.visible')
          //.should('have.css', 'background-color', '#883025')
          .should('contain.text', 'No match for Username and/or Password.')


        //2nd Verification point!; Asserting we are still on current url after clicking
        cy.url().should('eq', currentUrl);

      });

    })



    it('Negative Validation of the Forgot password element with wrong email format(without the @ character)', () => {

      //Asserting the Forgot Password link
      login.forgotPasswordUrl()
        .should('be.visible')
        .should('contain.text', 'Forgotten Passwor')
        .click();

      //Asserting the elements on the Forgot Password page
      login.forgotPasswordPageHeading()
        .should('contain.text', 'Forgot Your Password?')

      //Asserting the desciption text is displayed properly
      login.forgotPasswordPageDescription()
        .should('contain.text', 'Enter the e-mail address associated with your account. Click submit to have a password reset link e-mailed to you.');

      //Asserting the Email address heading is displayed properly
      login.forgotPasswordPageEmailHeading()
        .should('contain.text', 'E-Mail Address')

      //Asserting the presence of placeholder in input field
     login.forgotPasswordPageEmailPlaceholder()
        .should('have.attr', 'placeholder', 'E-Mail Address')
        .click()
        // .should('have.css', 'border-color', 'rgb(255, 0, 0)');
        .type('clifforgmail.com')

      //Valdiating the reset button
      login.forgotPassPasswordPageResetButton()
        .should('be.visible')
        .should('be.enabled')
        .should('have.css', 'background-color', 'rgb(30, 145, 207)')


      //Validating the reset button text content
     login.forgotPassPasswordPageResetButtonText()
        .should('contain.text', 'Reset')
      /*
                  //Validating the footer element(OpenCart url link)
                  cy.xpath('//*[@id="footer"]/a')
                  .click()
                  cy.url().should('eq', 'https://www.opencart.com/')
      
      
                   //Validating the footer element(Copyright)
                   cy.go("back") */

      //Validating the Copyright Element
       // general_pom.copyrightText()
        

      //Submit button
      login.forgotPassPasswordPageSubmitButton().click()

      //Verifying the error message (1st verification point)
      login.formSubmitionErrorMessage()
        .should('be.visible')
        .should('contain.text', 'Warning: The E-Mail Address was not found in our records!')

      //verifying the url is thesame(2nd verification point)
      cy.url().should('eq', 'https://demo.opencart.com/admin/index.php?route=common/forgotten')



    });




    it('Negative Validation of the Forgot password element with wrong email format (with the @ character but no ".com"', () => {

      //Asserting the Forgot Password link
      login.forgotPasswordUrl()
        .should('be.visible')
        .should('contain.text', 'Forgotten Password')
        .click();

      //Asserting the elements on the Forgot Password page
      login.forgotPasswordPageHeading()
        .should('contain.text', 'Forgot Your Password?')

      //Asserting the desciption text is displayed properly
      login.forgotPasswordPageDescription()
        .should('contain.text', 'Enter the e-mail address associated with your account. Click submit to have a password reset link e-mailed to you.');

      //Asserting the Email address heading is displayed properly
      login.forgotPasswordPageEmailHeading()
        .should('contain.text', 'E-Mail Address')

      //Asserting the presence of placeholder in input field
      login.forgotPasswordPageEmailPlaceholder()
        .should('have.attr', 'placeholder', 'E-Mail Address')
        .click()
        // .should('have.css', 'border-color', 'rgb(255, 0, 0)');
        .type('clifford@gmail')

      //Valdiating the reset button
      login.forgotPassPasswordPageResetButton()
        .should('be.visible')
        .should('be.enabled')
        .should('have.css', 'background-color', 'rgb(30, 145, 207)')


      //Validating the reset button text content
       login.forgotPassPasswordPageResetButtonText()
        .should('contain.text', 'Reset')

      /*
                //Validating the footer element(OpenCart url link)
                cy.xpath('//*[@id="footer"]/a')
                .click()
                cy.url().should('eq', 'https://www.opencart.com/')
      
      
                 //Validating the footer element(Copyright)
                 cy.go("back") */

      //Validating copyright text
      //general_pom.copyrightText()

      login.forgotPassPasswordPageSubmitButton().click()

      //Verifying the error message (1st verification point)
      login.formSubmitionErrorMessage()
        .should('be.visible')
        .should('contain.text', 'Warning: The E-Mail Address was not found in our records!')

      //verifying the url is thesame(2nd verification point)
      cy.url().should('eq', 'https://demo.opencart.com/admin/index.php?route=common/forgotten')


    });




    it('Negative validation of the Reset element by providing a Valid email address not available within the data base', () => {

      //Asserting the Forgot Password link
       login.forgotPasswordUrl()
        .should('be.visible')
        .should('contain.text', 'Forgotten Passwor')
        .click();

      //Asserting the elements on the Forgot Password page
      login.forgotPasswordPageHeading()
        .should('contain.text', 'Forgot Your Password?')

      //Asserting the desciption text is displayed properly
      login.forgotPasswordPageDescription()
        .should('contain.text', 'Enter the e-mail address associated with your account. Click submit to have a password reset link e-mailed to you.');

      //Asserting the Email address heading is displayed properly
      login.forgotPasswordPageEmailHeading()
        .should('contain.text', 'E-Mail Address')

      //Asserting the presence of placeholder in input field
      login.forgotPasswordPageEmailPlaceholder()
        .should('have.attr', 'placeholder', 'E-Mail Address')
        .click()

        // .should('have.css', 'border-color', 'rgb(255, 0, 0)');
        .type('clifford@gmail.com')

      //Valdiating the reset button
      login.forgotPassPasswordPageResetButton()
        .should('be.visible')
        .should('be.enabled')
        .should('have.css', 'background-color', 'rgb(30, 145, 207)')


      //Validating the reset button text content
      login.forgotPassPasswordPageResetButtonText()
        .should('contain.text', 'Reset')

      /*

      //Validating the footer element(OpenCart url link)
      cy.xpath('//*[@id="footer"]/a')
      .click()
      cy.url().should('eq', 'https://www.opencart.com/')


       //Validating the footer element(Copyright)
       cy.go("back") */
      //general_pom.copyrightText()
        

      login.forgotPassPasswordPageSubmitButton().click()

      //Verifying the error message (1st verification point)
      login.formSubmitionErrorMessage()
        .should('be.visible')
        .should('contain.text', 'Warning: The E-Mail Address was not found in our records!')

      //verifying the url is thesame(2nd verification point)
      cy.url().should('eq', 'https://demo.opencart.com/admin/index.php?route=common/forgotten')


    })




    it('Postive validation of the Reset element by providing a Valid email address available within the data base', () => { //Test should fail on full app version !!To refactor!!!!!!

      //Asserting the Forgot Password link
      login.forgotPasswordUrl()
        .should('be.visible')
        .should('contain.text', 'Forgotten Passwor')
        .click();

      //Asserting the elements on the Forgot Password page
      login.forgotPasswordPageHeading()
        .should('contain.text', 'Forgot Your Password?')

      //Asserting the desciption text is displayed properly
      login.forgotPasswordPageDescription()
        .should('contain.text', 'Enter the e-mail address associated with your account. Click submit to have a password reset link e-mailed to you.');

      //Asserting the Email address heading is displayed properly
      login.forgotPasswordPageEmailHeading()
        .should('contain.text', 'E-Mail Address')

      //Asserting the presence of placeholder in input field
      login.forgotPasswordPageEmailPlaceholder()
        .should('have.attr', 'placeholder', 'E-Mail Address')
        .click()

        // .should('have.css', 'border-color', 'rgb(255, 0, 0)');
        .type('cfolefac@gmail.com')

      //Valdiating the reset button
      login.forgotPassPasswordPageResetButton()
        .should('be.visible')
        .should('be.enabled')
        .should('have.css', 'background-color', 'rgb(30, 145, 207)')


      //Validating the reset button text content
      login.forgotPassPasswordPageResetButtonText()
        .should('contain.text', 'Reset')

      /*

      //Validating the footer element(OpenCart url link)
      cy.xpath('//*[@id="footer"]/a')
      .click()
      cy.url().should('eq', 'https://www.opencart.com/')


       //Validating the footer element(Copyright)
       cy.go("back") */
      //general_pom.copyrightText()
        

      login.forgotPassPasswordPageSubmitButton().click()

      //Verifying the error message (1st verification point)
      login.formSubmitionErrorMessage()
        .should('be.visible')
        .should('contain.text', 'Warning: The E-Mail Address was not found in our records!')

      //verifying the url is thesame(2nd verification point)
      cy.url().should('eq', 'https://demo.opencart.com/admin/index.php?route=common/forgotten')


      //Validating the return Arrow button
      login.returnArrow()
        .should('be.visible')
        .click()


    })


    it('Validating if page will login with an already logged in url', () => {

      //Asserting if login will be a success from an already logged in session url
      cy.visit('https://demo.opencart.com/admin/index.php?route=common/dashboard&user_token=fd1155fdc40f9241a2be6a7bdf6e6c31')

      cy.xpath('//*[@id="form-login"]/div[1]/i')
        .should('be.visible')
      cy.xpath('//*[@id="form-login"]/div[1]/text()')
        .should('contain.text', 'Invalid token session. Please login again.')



    })



    it('Postive testing with Valid user name and valid password', () => {

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

      //Validating the input box element 
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

      //Waiting for the warning message to fade off before clicking the window close button
      cy.wait(3000)

      //Verifying the window close button is displayed and closes the alert box when clicked
      cy.xpath('//*[@id="modal-security"]/div/div/div[1]/button')
        .should('be.visible')
        .click()

      //Asserting the Alert box is closed after clicking
      cy.xpath('//*[@id="modal-security"]/div/div/div[1]/button')
        .should('not.be.visible')


      //Handling Uncaught exception
      cy.on('uncaught:exception', (err, runnable) => {

        // Log the uncaught exception
        console.error('Uncaught exception:', err.message);
      
        // Optionally, prevent the error from failing the test
        return false;
      });



    })




  })

})

