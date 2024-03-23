class Dashloard{

   notificationBell(){
   return cy.xpath('//*[@id="header-notification"]/a')
   }

   notificationBellText(){
    return cy.xpath('//*[@id="header-notification"]/div/span')
   }

   dashboardHeading(){
    return cy.xpath('//*[@id="content"]/div[1]/div/h1')
    //.should('contain.text', 'Dashboard')
    //.should('have.css', 'font-size', '30px')

   }

   developerSettingsButton(){
    cy.xpath('//*[@id="button-setting"]')
    
   }

   navigationSideBar(){
      return cy.get('#column-left').should('exist')
   }













}export default Dashloard