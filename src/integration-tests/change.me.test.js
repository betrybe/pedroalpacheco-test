/*describe('', () => {
    
});*/


const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

const url = 'http://localhost:3000';

describe('API: Esta no Ar! /', () => {
    it('Status 200', (done) => {
        chai.request(url)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});