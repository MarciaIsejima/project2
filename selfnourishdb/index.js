const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const dotenv = require('dotenv');

dotenv.config();

const CONNECTION_URL = `mongodb+srv://${process.env.MONGODBUSER}:${process.env.MONGODBPWD}@langara-o4fv1.mongodb.net/test?retryWrites=true`;
const DATABASE_NAME = "selfnourish";

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

var database, collection;


//app.listen(3000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error + CONNECTION_URL;
        }
        database = client.db(DATABASE_NAME);
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
//});

app.get("/nutrients", (request, response) => {
		collection = database.collection("nutrients");
    collection.find({}).toArray((error, result) => {
        if(error) {
            response.status(500).send(error);
        }
        response.send(result);
    });
});

app.get("/conditions", (request, response) => {
		collection = database.collection("healthConditions");
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});


module.exports = app//.callback()
//app.listen(3000);
//console.log("Listening on port 3000...");