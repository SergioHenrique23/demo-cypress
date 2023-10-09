describe('Teste End-to-End', () => {
    it('Teste 1: Visita Página', () => {
        // abre o site
        cy.visit('http://localhost:5000/')
    })
    it('Teste 2: Calcula Frete', () => {    
        // Realiza Compra
        cy.get('[data-id=2]').within(() => {
           cy.contains('Comprar').click().then
           cy.wait(2000)
        })
        cy.get('.swal-text').contains('Sua compra foi realizada com sucesso')

        // Fecha o pop-up de compra confirmada
        cy.get('.swal-button').click()
    })
  })