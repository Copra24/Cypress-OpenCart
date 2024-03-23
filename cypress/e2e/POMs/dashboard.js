class Dashloard{

   notificationBell(){
   return cy.xpath('//*[@id="header-notification"]/a')
   }

   notificationBellText(){
    return cy.xpath('//*[@id="header-notification"]/div/span')
   }

   dashboardHeading(){
    return cy.get('h1').eq(0)
    .should('have.text', 'Dashboard')
    .should('have.css', 'font-size', '30px')
    .should('have.css', 'color', '30px')
    

   }

   developerSettingsButton(){
    cy.xpath('//*[@id="button-setting"]')
    
   }

   // navigationSideBar(){
   //    return cy.get('#column-left').should('exist')
   // }













}export default Dashloard