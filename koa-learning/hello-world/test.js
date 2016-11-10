const app = require("./app");
const request = require("supertest").agent(app.listen())

describe("Hello World", () => {  

    it("should return Hello World", function (done) {
        request // 已经获取到了发送请求的地址
            .get("/")
            .expect(200)
            .expect("Hello World", done);
    });
});