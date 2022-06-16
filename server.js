const express = require("express");
const app = express();
const port = 8000;
var Chance = require('chance');

var chance = new Chance();

class User {
    constructor() {
        this._id = chance.ip();
        this.firstName = chance.first();
        this.LastName = chance.last();
        this.Phone = chance.phone();
        this.Mail = chance.email();
        this.Password = chance.word();
    }
}
class Company {
    constructor() {
        this._id = chance.ip()
        this.Name = chance.company();
        this.Direction = {
            Street :chance.street(),
            City : chance.city(),
            State : chance.state(),
            Zip : chance.zip(),
            Country : chance.country(),
        }
    }
}
const added = [new User(),new Company()]

app.get("/api/companies/new", (req, res)=>{
    res.json(new Company());
});
app.get("/api/users/new", (req, res) => {
    res.json(new User());
});
app.get("/api/users/company", (req,res) =>{
    res.json(added)
})




app.listen( 8000, () => console.log(`Listening on port: ${port}`) );