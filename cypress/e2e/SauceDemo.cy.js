describe('Sauce Demo tests', () => {
  it('Adding products to the cart', () => {

    cy.fixture('example.json').then((data)=>{

    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    for(let i = 0; i<6; i++){
      cy.get('button.btn_inventory').eq(i).click()
    }

    cy.get('.shopping_cart_link').click()

    for(let i = 0; i<6; i++){
      cy.get('div.cart_item').eq(i).should('be.visible')
    }

    for(let i = 0; i<data.items.length; i++){
      cy.get('div.inventory_item_name').eq(i).should('have.text', data.items[i].name)
      //cy.get('div.inventory_item_desc').eq(i).should('have.text', data.items[i].desc)
      cy.get('div.inventory_item_price').eq(i).should('have.text', data.items[i].price)
    }

    })

    

  })

  xit('Adding products to the cart', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    for(let i = 0; i<6; i++){
      cy.get('button.btn_inventory').eq(i).click()
    }

    cy.get('.shopping_cart_link').click()

    for(let i = 0; i<6; i++){
      cy.get('div.cart_item').eq(i).should('be.visible')
    }

  })
  
})






  
