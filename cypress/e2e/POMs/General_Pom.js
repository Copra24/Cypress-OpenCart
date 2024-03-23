class General_Pom{
    copyrightText(){
        cy.xpath('//*[@id="footer"]/text()').should('contain.text', '© 2009-2024 All Rights Reserved.')
    }

    opencartFooterUrl(){
        
    return cy.xpath('//*[@id="footer"]/a')
     .click()
     cy.url().should('eq', 'https://www.opencart.com/')
    }

    opencartLogo(){
        return cy.xpath('//*[@id="header"]/div/a/img')
    }



}export default General_Pom