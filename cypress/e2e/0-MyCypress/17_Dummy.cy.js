describe('Dummy Assertion', () => {
    /*
        {
      "id": 2,
      "employee_name": "Garrett Winters",
      "employee_salary": 170750,
      "employee_age": 63,
      "profile_image": ""
    }, */

    it('Dummy Assert', () => {
        cy.request('https://dummy.restapiexample.com/api/v1/employees')
        .should((response =>{
            assert.equal(response.body.data[13].id,14)
            assert.equal(response.body.data[13].employee_age,43)
            assert.equal(response.body.data[13].employee_name,'Haley Kennedy')
        }))
    });
});