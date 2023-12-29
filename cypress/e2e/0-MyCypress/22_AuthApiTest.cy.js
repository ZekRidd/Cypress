describe('Test with auth', () => {

    it.skip('Test_01', () => {
            cy.request({
                url:'https://restful-booker.herokuapp.com/booking/145',
                method:'GET',
                auth:
                    {
                            "username":"admin",
                            "password":"password123"
                    },
                    "token":"abc123"
            }).then(response=>{
                expect(response.body.lastname).to.eq("Smith")
            })
        
    });

    it('Test_02 POST and Assert', () => {
        cy.request({
            url:'https://restful-booker.herokuapp.com/booking',
            method:'POST',
            auth:
                {
                        "username":"admin",
                        "password":"password123"
                },
                "token":"abc123",
            body:{
                "firstname":"Yasir",
                "lastname":"Can",
                "totalprice":223,
                "depositpaid":true,
                "bookingdates":{
                    "checkin":"2023-01-01",
                    "checkout":"2023-10-01"
                },
                "additionalneeds":"Breakfast"
            }
        }).then(response=>{
            expect(response.body.booking.firstname).to.eq("Yasir")
            expect(response.body.booking.lastname).to.eq("Can")
            expect(response.body.booking.bookingdates.checkin).to.eq('2023-01-01')
        })
    });
})