/// <reference types="cypress" />

context('Pesquisar', () => {

  beforeEach(function () {
    cy.visit('https://duckduckgo.com')
    cy.clearCookies()
  })

  it('Utilizando ENTER', () => {
    cy.get('#search_form_input_homepage').type('últimas notícias sobre Bitcoin{enter}')
  });

  it('Verificando os resultados', () => {
    cy.get('#search_form_input_homepage').type('últimas notícias sobre Bitcoin')
      .get('#search_button_homepage').click()
  });

  it('Utilizando ENTER', () => {
    cy.get('#search_form_input_homepage').type('últimas notícias sobre Bitcoin{enter}')
      .get('[class="LnpumSThxEWMIsDdAT17 CXMyPcQ6nDv47DKFeywM"]').should(($lis) => {
        expect($lis, '10 items').to.have.length(10)})
  });


})