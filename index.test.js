// install dependencies
// const { execSync } = require('child_process');
// execSync('npm install');
// execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");
const {describe, test, expect} = require("@jest/globals")


describe('./musicians endpoint', () => {
    // Write your tests here
    
    test("get 200 status",async () => {
        const response = await request(app).get("/musicians");
        expect(response.statusCode).toBe(200);

    })

    test("test the data", async () => {
        const response = await request(app).get("/musicians");

        const responseData = JSON.parse(response.text);
        expect(responseData[0].name).toBe("Mick Jagger")
    })
    
})

describe('./musicians endpoint', () => {
    // Write your tests here
    
    test("get 200 status",async () => {
        const response = await request(app).get("/bands");
        expect(response.statusCode).toBe(200);

    })

    test("test the data", async () => {
        const response = await request(app).get("/bands");

        const responseData = JSON.parse(response.text);
        expect(responseData[0].name).toBe("The Beatles")
    })
    




    
})