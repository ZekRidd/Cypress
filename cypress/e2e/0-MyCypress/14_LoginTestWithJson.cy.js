describe('Login test with json ', () => {
    before(function(){
        cy.fixture(qualitydemy).then(function(data){
            this.data=data
        })

    })
    it('Login Test', () => {
        cy.visit(this.data.url)
        cy.contains
    });
});