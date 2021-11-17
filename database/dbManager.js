const { MongoClient } = require("mongodb");
require("dotenv").config();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@laundryappcluster0.7qka0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

//This connects to the collections
const collectionConnect = async (documents) => {
  //Database Name
  const dbName = "laundryApp";

  //Connect to url
  const url = uri || "mongodb://localhost:27017";
  const client = await new MongoClient(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  //Connect to db
  await client.connect();
  console.log("Connected to server");

  //Connect to collection
  const db = await client.db(dbName);
  const collection = await db.collection(documents);
  console.log("collection => ", documents);

  return { collection, client };
};

//-----------------Customer/Provider Shared Features-------//
const findUser = async (collectionName, email) => {
  let connectedCollection;

  try {
    connectedCollection = await collectionConnect(collectionName);
    const collection = connectedCollection.collection;
    const res = await collection.findOne({ email: email });
    return res;
  } catch (error) {
    console.log("ERROR--", error);
  } finally {
    await connectedCollection.client.close();
  }
};

const addUser = async (collectionName, data) => {
  let connectedCollection;

  try {
    //Check if user Exist: If it does than return false
    connectedCollection = await collectionConnect(collectionName);
    const collection = connectedCollection.collection;
    const res = await findUser(collectionName, data.email);

    if (res) {
      console.log("User Exist");
      return false;
    }

    await collection.insertOne(data);
    console.log(`User Added to ${collectionName} collection!`);
  } catch (error) {
    console.log("ERROR--", error);
  } finally {
    await connectedCollection.client.close();
  }
};

//-----------------Provider DB Manager--------------------//

//-----------------Customer DB Manager--------------------//

module.exports = { addUser };
