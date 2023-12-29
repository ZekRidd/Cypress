describe('Assert with expect', () => {

    const requestUrl='https://jsonplaceholder.cypress.io/comments'

    /*  
        {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },

    */

    it('Test_01', () => {
        
        cy.request(requestUrl).should((response=>{
            expect(response.status).to.eq(200)
            expect(response.headers.connection).to.eq('keep-alive')
        }))
        
    });

    it('Test_02', () => {
        cy.request({
            url:requestUrl,
            method:'GET'
        }).should((response)=>{
            expect(response.headers.pragma).to.eq('no-cache')
        })
    });
});