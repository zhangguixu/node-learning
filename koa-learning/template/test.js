require("should-http");

const app = require("./app");
const request = require("supertest").agent(app.listen());
const should = require("chai").Should(); // 注意大写

describe("template example", () => {
    
    it("should return html", (done) => {
        request
            .get("/")
            .expect(200)
            .end((err, res) => {
                if(err) done(err);
                // should-http测试模块
                res.should.be.html;
                // chai中的Should模块
                res.text.should.include("<title>template example</title>");
                done();
            });
    });
  
});