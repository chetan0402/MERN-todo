const { MongoClient } = require('mongodb');

const connectionString = process.env.MONGO_URL;
const client = new MongoClient(connectionString);

let db;

const connectToDb = async () => {
  if (!db) {
    try {
      const conn = await client.connect();
      db = conn.db();
      console.log("Database connected successfully");
    } catch (e) {
      console.error("Failed to connect to the database", e);
      throw e;
    }
  }
  return db;
};

module.exports = connectToDb;
