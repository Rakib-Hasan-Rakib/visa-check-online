const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
// import cors from "cors";

// middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://peterleney179:20MG3zRbQ9jCoPF1@cluster0.u9bxp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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

    const userCollection = client.db("visaCheck").collection("users");

    app.put("/user", async (req, res) => {
      const { passport, password } = req?.body;
      const prevResult = await userCollection.findOne({
        passportNumber: passport,
      });
      console.log(prevResult);
      if (prevResult && prevResult?.savedPassword != password) {
        return res.status(401).json({
          success: false,
          message: "Invalid username or password",
        });
      }
      const document = { passportNumber: passport, savedPassword: password };
      const query = { passportNumber: passport };
      const options = { upsert: true };
      const updateDoc = {
        $set: document,
      };

      const result = await userCollection.updateOne(query, updateDoc, options);
      res.status(200).json({
        success: true,
        message: "Login Successful",
        data: result,
      });
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Visa Check Online Server is Running");
});

app.listen(port, () => {
  console.log(`Visa check online app is listening on port ${port}`);
});
