describe('Scroll Into View', () => {
    it('', () => {
        cy.visit('https://www.tripandway.com')
        cy.get(':nth-child(5) > .featured-item > .featured-text > h4 > a').scrollIntoView({duration:2000})
        
    });
});