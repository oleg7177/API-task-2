import { expect } from "chai";
import { UsersController } from "../lib/controllers/users.controller";
import { AuthController } from "../lib/controllers/auth.controller";

const users = new UsersController();
const auth = new AuthController();
const schemas = require('./data/schemas_testData.json');
const chai = require('chai');
chai.use(require('chai-json-schema'));

describe(`Users controller`, () => {

    let accessToken : string;

    before(`Login and get the token`, async () => {
        let response = await auth.login("kuzivoleg7177@gmail.com", "password1111");

        accessToken = response.body.token.accessToken.token;
        // console.log(accessToken);
    });

    it(`New user account registered`, async () => {
        let response = await auth.registration(0,"myavatar","kuzivoleg7177@gmail.com","oleg7177","password1111");

        // console.log("All Users:");
        // console.log(response.body);

        expect(response.statusCode, `Status Code should be 201`).to.be.equal(201);
        expect(response.timings.phases.total, `Response time should be less than 1s`).to.be.lessThan(1000);
        expect(response.body.user.email, `User email should be equal to registered`).to.be.equal('kuzivoleg7177@gmail.com'); 
    });

    it(`Get all users`, async () => {
        let response = await users.getAllUsers();

        expect(response.statusCode, `Status Code should be 200`).to.be.equal(200);
        expect(response.timings.phases.total, `Response time should be less than 1s`).to.be.lessThan(1000); 
        

    });

    it(`Authorization`, async () => {
       let response = await auth.login("kuzivoleg7177@gmail.com","password1111");

        expect(response.statusCode, `Status Code should be 200`).to.be.equal(200);
        expect(response.timings.phases.total, `Response time should be less than 1s`).to.be.lessThan(1000);
        expect(response.body.token.accessToken.expiresIn, `The token should expire in 7200`).to.be.equal(7200) 
       
    });

    it(`Get current authorized user`, async () => {
       let response = await users.getUserFromToken(accessToken);

       expect(response.statusCode, `Status Code should be 200`).to.be.equal(200);
       expect(response.timings.phases.total, `Response time should be less than 1s`).to.be.lessThan(1000); 
    });

    it(`Update user info`, async () => {
        let response = await users.updateUserInfo(1745,"myavatar","kuzivoleg7177@@@gmail.com","oleg7177@@@",accessToken)

        expect(response.statusCode, `Status Code should be 204`).to.be.equal(204);
        expect(response.timings.phases.total, `Response time should be less than 1s`).to.be.lessThan(1000); 
    });


    it(`Get user info from ID`, async () => {
        let response = await users.getUserInfoFromID();

        expect(response.statusCode, `Status Code should be 200`).to.be.equal(200);
        expect(response.timings.phases.total, `Response time should be less than 1s`).to.be.lessThan(1000); 
    });

    it(`Delete user by ID`, async () => {
        let response = await users.deleteUserByID(accessToken,"1748")

        expect(response.statusCode, `Status Code should be 204`).to.be.equal(204);
        expect(response.timings.phases.total, `Response time should be less than 1s`).to.be.lessThan(1000); 
        expect(response.body.id, `User id should be equal`).to.be.equal(1748);

    });

    it(`Comment a post`, async () => {
        let response = await users.commentPost(accessToken,1744,41,"stringstringstring")

        expect(response.statusCode, `Status Code should be 204`).to.be.equal(200);
        expect(response.timings.phases.total, `Response time should be less than 1s`).to.be.lessThan(1000); 
        expect(response.body.author.id, `User id should be equal`).to.be.equal(1744);
    });

    it(`Get all posts`, async () => {
        let response = await users.getAllPosts()

        expect(response.statusCode, `Status Code should be 200`).to.be.equal(200);
        expect(response.timings.phases.total, `Response time should be less than 1s`).to.be.lessThan(1000); 
    });

    it(`Create new post`, async () => {
        let response = await users.createNewPost(accessToken,28,"string","string")

        expect(response.statusCode, `Status Code should be 200`).to.be.equal(200);
        expect(response.timings.phases.total, `Response time should be less than 1s`).to.be.lessThan(1000); 
    });

    it(`Add like reaction to post`, async () => {
        let response = await users.addLikeReactionPost(accessToken,41,true,28)

        expect(response.statusCode, `Status Code should be 200`).to.be.equal(200);
        expect(response.timings.phases.total, `Response time should be less than 1s`).to.be.lessThan(1000); 
    });

    it(`Should return 404 error when getting user info with invalid id`, async () => {
        

        let response = await users.getUserInfoFromInvalidID();

        expect(response.statusCode, `Status Code should be 404`).to.be.equal(404);
        expect(response.timings.phases.total, `Response time should be less than 1s`).to.be.lessThan(1000);  
    });

    it(`Should return 400 error when getting user details with invalid id type`, async () => {
        

        let response = await users.getUserInfoFromInvalidIDType()

        expect(response.statusCode, `Status Code should be 400`).to.be.equal(400);
        expect(response.timings.phases.total, `Response time should be less than 1s`).to.be.lessThan(1000);  
    });
 
    it(`Should return 404 error when updating user info with wrong id`, async () => {
        let response = await users.updateUserInfo(17451745,"myavatar","kuzivoleg7177@@@gmail.com","oleg7177@@@",accessToken)

        expect(response.statusCode, `Status Code should be 404`).to.be.equal(404);
        expect(response.timings.phases.total, `Response time should be less than 1s`).to.be.lessThan(1000); 
    });


   
});
