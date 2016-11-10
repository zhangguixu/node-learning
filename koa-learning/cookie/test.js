const app = require("./app");
const request = require("supertest").agent(app.listen());
const should = require("chai").Should();

describe("Cookie Example", () => {
    
    // 第一次请求
    it("get cookie", (done) => {
        request
            .get("/")
            .expect(200)
            .expect("set-cookie", new RegExp("name=zhang"))
            .end(done);
    });

    // 第二次请求，request会保存cookie的信息，
    // 因此发送请求时，会携带cookie的信息http请求中。
    it("send cookie", (done) => {
        request
            .get("/")
            .expect("zhang")
            .end(done);
    });
});