import endpoints = require('../helper/endpoints.json')
import Http = require('../helper/http-methods')
import chai = require('chai');


describe('teste get 200', () => {

    it('Get metrics', async function () {
        let endpoint = endpoints["anime"]
        let res: any = await Http.get(endpoint)
        chai.expect(res.statusCode).to.be.equal(200)
    });

})