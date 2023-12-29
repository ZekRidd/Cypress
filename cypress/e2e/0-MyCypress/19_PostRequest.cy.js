describe('POST', () => {
    const requestUrl='https://jsonplaceholder.cypress.io/comments'

    it('POST Test_01', () => {
        cy.request('POST',requestUrl,{
            userId:501,
            title:"POST with Cypress",
            body:"Cypress",
            name:"Ramazan"
        }).should((response=>{
            expect(response.body.name).to.eq("Ramazan")
            expect(response.body.title).to.eq("POST with Cypress")
        }))
        
    });
});