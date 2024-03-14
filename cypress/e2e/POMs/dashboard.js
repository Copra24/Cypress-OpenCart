class Dashloard{

   notificationBell(){
   return cy.xpath('//*[@id="header-notification"]/a')
   }

   notificationBellText(){
    return cy.xpath('//*[@id="header-notification"]/div/span')
   }













}export default Dashloard