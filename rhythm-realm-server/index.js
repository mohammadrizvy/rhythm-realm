const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();

//!MiddleWares_____

app.use(cors());
app.use(express.json());

// console.log(process.env.DB_USER);
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ss5j1ke.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);
//!----------------------------------------------------------

//!All Collections

const classesCollection = client.db("RhythmRealm").collection("classes");
const selectedClassCollection = client
  .db("RhythmRealm")
  .collection("selectedClasses") ;

//! Classes releted API'S

app.get("/classes", async (req, res) => {
  const result = await classesCollection.find().toArray();
  res.send(result);
});

//!Selected class releted API'S

app.get("/selectedclasses", async (req, res) => {
  const email = req.query.email;
  if (!email) {
    res.send([]);
  }
  const query = { email: email };
  const result = await selectedClassCollection.find(query).toArray();
  res.send(result);
});

app.post("/selectedclasses", async (req, res) => {
  const item = req.body;
  const result = await selectedClassCollection.insertOne(item) ;
  res.send(result);
});

 app.delete("/selectedclasses/:id", async (req, res) => {
   const id = req.params.id;
   const query = { _id: new ObjectId(id) };
   const result = await selectedClassCollection.deleteOne(query);
   res.send(result);
 });

//!---------------------------------------------------------
app.get("/", (req, res) => {
  res.send("Assignment 12's server is running");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
