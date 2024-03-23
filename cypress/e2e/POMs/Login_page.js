class LoginPage{

    userNameField(){
        return cy.get('#input-username')
    }

    userPasswordField(){
       return cy.get('#input-password')
    }
    loginButton(){
        return cy.xpath('//*[@id="form-login"]/div[3]/button')
    }

    loginButtonText(){
       return cy.xpath('//*[@id="form-login"]/div[3]/button/text()')
    }

    alertMessage(){
       return cy.get('#alert')
    }

    forgotPasswordUrl(){
       return cy.xpath("//*[@id='form-login']/div[2]/div[2]/a")
    }

    forgotPasswordPageHeading(){
        return cy.xpath('//*[@id="content"]/div/div/div/div/div[1]/text()')
    }

    forgotPasswordPageDescription(){
       return cy.xpath('//*[@id="form-forgotten"]/p/text()')
    }

    forgotPasswordPageEmailHeading(){
       return cy.xpath('//*[@id="form-forgotten"]/div[1]/label')

    }

    forgotPasswordPageEmailPlaceholder(){
       return cy.xpath('//*[@id="input-email"]')
    }

    forgotPassPasswordPageResetButton(){
        return cy.xpath('//*[@id="form-forgotten"]/div[2]/button')
    }

    forgotPassPasswordPageResetButtonText(){
        return  cy.xpath('//*[@id="form-forgotten"]/div[2]/button/text()')
    }

    forgotPassPasswordPageSubmitButton(){
       return cy.xpath('//*[@id="form-forgotten"]/div[2]/button')
    }

    formSubmitionErrorMessage(){
        return cy.xpath('//*[@id="alert"]/div')

    }

    returnArrow(){
        return cy.xpath('//*[@id="form-forgotten"]/div[2]/a')
    }

    HomeAlertBoxInputField(){
       return cy.xpath('//*[@id="form-admin"]/div[1]/div/input')

    }

    HomeAlertRenameButton(){
        return cy.xpath('//*[@id="button-admin"]')
    }

    HomeAlertWarningText(){
        return cy.xpath('//*[@id="alert"]/div/i')
    }

    






}export default LoginPage