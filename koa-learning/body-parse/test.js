const app = require("./app");
const request = require("supertest").agent(app.listen());

describe("body-parse examples", () => {

    // get请求带参数
    it("get json", (done) => {
        request
            .get("?name=zhang")
            .expect(200, {
                name : "ZHANG"
            });
        done();
    });

    // post请求带参数
    it("post json", (done) => {
        request
            .post("/")
            .field("name", "zhang")
            .expect(200, {
                name : "ZHANG"
            });
        done();
    });

    // 分支测试，感觉可有可无
    it("no .name error", (done) => {
        request
            .get("/")
            .expect(400, done());
    });

});