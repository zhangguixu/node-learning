require("should-http");
const app = require("./app");
const request = require("supertest").agent(app.listen());

const should = require("chai").Should();

describe("route examples", () => {
    
    it("get a.html", (done) => {
        request
            .get("/a")
            .expect(200, (err, res) => {
                if(err) done(err);
                res.should.be.html;
                res.text.should.include("<p>a</p>");
                done();
            });
    });

    it("get b.html", (done) => {
        request
            .get("/b")
            .expect(200, (err, res) => {
                if(err) done(err);
                res.should.be.html;
                res.text.should.include("<p>b</p>");
                done()
            });
    });

    it("get c.html with parameter", (done) => {
        request
            .get("/c")
            .expect(200, (err, res) => {
                if(err) done(err);
                res.should.be.html;
                res.text.should.include("<p>c</p>");
                done();
            });
    });
})