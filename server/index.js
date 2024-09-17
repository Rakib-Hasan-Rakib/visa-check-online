const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
require("dotenv").config();
const cloudinary = require("./src/cloudinary");
const multer = require("multer");

// middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.memoryStorage();
const upload = multer({ storage });

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri = process.env.DB_URI;

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
    // await client.connect();

    const userCollection = client.db("visaCheck").collection("users");
    const docsCollection = client.db("visaCheck").collection("docs");

    app.put("/user", async (req, res) => {
      const { passport, password } = req?.body;
      const prevResult = await userCollection.findOne({
        passportNumber: passport,
      });
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

    app.get("/docs/:passNum", async (req, res) => {
      const passNum = req.params.passNum;
      const result = await docsCollection.findOne({ passportNum: passNum });
      res.status(200).json({
        success: true,
        message: "got data",
        data: result,
      });
    });

    app.post(
      "/upload",
      upload.fields([
        { name: "photo" },
        { name: "image_1" },
        { name: "image_2" },
        { name: "image_3" },
        { name: "image_4" },
        { name: "image_5" },
        { name: "image_6" },
      ]),
      async (req, res, next) => {
        const {
          surname,
          givenName,
          dob,
          gender,
          fatherName,
          motherName,
          phoneNum,
          email,
          nid,
          education,
          status,
          visaNum,
          passportNum,
          marrital,
          religion,
          present,
          permanent,
        } = req.body;

        try {
          const prevResult = await docsCollection.findOne({
            passportNum: passportNum,
          });

          if (prevResult?.passportNum == passportNum) {
            return res.status(400).json({
              success: false,
              message: "You already uploaded data for this user",
            });
          }

          const photo = req?.files?.photo ? req?.files?.photo[0]?.buffer : null;

          const image1 = req.files.image_1
            ? req.files.image_1[0]?.buffer
            : null;
          const image2 = req.files.image_2
            ? req.files.image_2[0]?.buffer
            : null;
          const image3 = req.files.image_3
            ? req.files.image_3[0]?.buffer
            : null;
          const image4 = req.files.image_4
            ? req.files.image_4[0]?.buffer
            : null;
          const image5 = req.files.image_5
            ? req.files.image_5[0]?.buffer
            : null;
          const image6 = req.files.image_6
            ? req.files.image_6[0]?.buffer
            : null;
          let doc0;
          let doc1;
          let doc2;
          let doc3;
          let doc4;
          let doc5;
          let doc6;
          if (photo) {
            doc0 = await cloudinary.uploadOnCloud(photo);
          }
          if (image1) {
            doc1 = await cloudinary.uploadOnCloud(image1);
          }
          if (image2) {
            doc2 = await cloudinary.uploadOnCloud(image2);
          }
          if (image3) {
            doc3 = await cloudinary.uploadOnCloud(image3);
          }
          if (image4) {
            doc4 = await cloudinary.uploadOnCloud(image4);
          }
          if (image5) {
            doc5 = await cloudinary.uploadOnCloud(image5);
          }
          if (image6) {
            doc6 = await cloudinary.uploadOnCloud(image6);
          }

          let cloudArr = [doc0, doc1, doc2, doc3, doc4, doc5, doc6];
          let cloudDoc = cloudArr?.filter((data) => data !== undefined);
          let finalCloudDoc = [];
          cloudDoc?.map((doc) =>
            finalCloudDoc?.push({
              publicId: doc?.public_id,
              fileUrl: doc?.secure_url,
            })
          );
          let document = {
            finalCloudDoc,
            surname,
            givenName,
            dob,
            gender,
            fatherName,
            motherName,
            phoneNum,
            email,
            nid,
            education,
            status,
            visaNum,
            passportNum,
            marrital,
            religion,
            present,
            permanent,
          };

          const result = await docsCollection.insertOne(document);

          res.status(200).json({
            success: true,
            message: "data uploaded successfully",
            data: result,
          });
        } catch (error) {
          next(error);
        }
      }
    );

    app.put(
      "/upload/:passNum",
      upload.fields([
        { name: "image7" },
        { name: "image8" },
        { name: "image9" },
      ]),
      async (req, res, next) => {
        const passNum = req.params.passNum;
        console.log(passNum);
        try {
          const prevData = await docsCollection.findOne({
            passportNum: passNum,
          });

          const image7 = req.files.image7 ? req.files.image7[0]?.buffer : null;
          const image8 = req.files.image8 ? req.files.image8[0]?.buffer : null;
          const image9 = req.files.image9 ? req.files.image9[0]?.buffer : null;
          let doc7;
          let doc8;
          let doc9;

          if (image7) {
            doc7 = await cloudinary.uploadOnCloud(image7);
            prevData.finalCloudDoc.push({
              publicId: doc7?.public_id,
              fileUrl: doc7?.secure_url,
            });
          }
          if (image8) {
            doc8 = await cloudinary.uploadOnCloud(image8);
            prevData.finalCloudDoc.push({
              publicId: doc8?.public_id,
              fileUrl: doc8?.url,
            });
          }
          if (image9) {
            doc9 = await cloudinary.uploadOnCloud(image9);
            prevData.finalCloudDoc.push({
              publicId: doc9?.public_id,
              fileUrl: doc9?.url,
            });
          }
          const filter = { passportNum: passNum };
          const options = { upsert: true };
          const updatedDoc = {
            $set: { finalCloudDoc: prevData.finalCloudDoc },
          };
          const result = await docsCollection.updateOne(
            filter,
            updatedDoc,
            options
          );
          res.status(200).json({
            success: true,
            message: "data updated successfully",
            data: result,
          });
        } catch (error) {
          next(error);
        }
      }
    );

    app.delete("/deleteDoc/:id", async (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) };
      const result = await docsCollection.findOne(query);
      const publicIds = result?.finalCloudDoc?.map((info) => info.publicId);
      if (publicIds && publicIds.length > 0) {
        const deleteRes = await cloudinary.deleteFromCloud(publicIds);
        if (deleteRes[0].result == "ok") {
          const deletedResult = await docsCollection.deleteOne(query);
          res.status(200).json({
            success: true,
            message: "data deleted successfully",
            data: deletedResult,
          });
        }
      }
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
