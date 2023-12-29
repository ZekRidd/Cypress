describe('POST CREATE', () => {

    const bodyRequest={"name":"Aysel","salary":"5000","age":"33"}

    it('API Post Create TEST', () => {
        cy.request({
            url : 'https://dummy.restapiexample.com/api/v1/create',
            method : 'POST',
            body:bodyRequest
        }).then((response=>{
            expect(response.body.data.name).to.eq("Aysel")
            expect(response.body.data.salary).to.eq("5000")
            expect(response.body.data.age).to.eq("33")

        }))
        
    });
});