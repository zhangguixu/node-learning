const app = require('./app');
const request = require('supertest').agent(app.listen());

describe('negotiation example', () => {

    describe('json', () => {
        it('should respond with json', (done) => {
            request
                .get('/foo')
                .set('Accept', 'application/json')
                .expect(200)
                .expect('Content-Type', /json/)
                .expect({name : 'foo'}, done);
        });
    });

    describe('xml', () => {
        it('should respond with xml', (done) => {
            request
                .get('/bar')
                .set('Accept', 'application/xml')
                .expect(200)
                .expect('Content-Type', /xml/)
                .expect('<name>bar</name>', done);
        });
    });

    describe('html', () => {
        it('should respond with html', (done) => {
            request
                .get('/foo')
                .set('Accept', 'text/html')
                .expect(200)
                .expect('Content-Type', /html/)
                .expect('<h1>foo</h1>', done);
        });
    });

    describe('text', () => {
        it('should respond with text', (done) => {
            request
                .get('/bar')
                .set('Accept', 'text/plain')
                .expect(200)
                .expect('Content-Type', /plain/)
                .expect('bar', done);
        });
    });

});