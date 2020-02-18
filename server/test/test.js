const chai = require("chai")
const chaiHttp = require("chai-http") ;
const app = require("../app.js") ;

chai.use(chaiHttp);
chai.should();
describe("welcome message", ()=>{
    it("app should return a message on root", ()=>{
        chai.request(app)
        .get("/")
        .then((res)=>{
            res.status.should.be.equal(200);
            res.body.response.message.should.be.equal('welcome dearly to papel');

        }).catch((error) => console.log(error));

    })
})