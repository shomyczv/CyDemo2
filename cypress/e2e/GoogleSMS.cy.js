Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Google SMS', () => {
  it('Send SMS', () => {

    cy.fixture('contacts.json').then((data)=>{

      cy.visit('https://messages.google.com/web/authentication')
      cy.wait(10000)

      for(let i = 0; i<data.contacts.length; i++){
        cy.get('[href="/web/conversations/new"]').click()
        cy.get('span[role="presentation"]>input').type(data.contacts[i].phoneNum)
        cy.get('.anon-contact-name').contains(data.contacts[i].phoneNum).click()
        cy.get('textarea').type(data.message.replace('$',data.contacts[i].name) + '{enter}')
        cy.wait(5000)
      }

    })

    

  })

 
  
})






  
