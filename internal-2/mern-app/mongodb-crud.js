const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'college';

async function main() {
const client = new MongoClient(url);
await client.connect();
console.log('Connected to MongoDB');

const db = client.db(dbName);
const collection = db.collection('students');

// Create
await collection.insertOne({ name: "Amukta", department: "CSE", roll_no: 101, marks: 95 });

// Read
const students = await collection.find().toArray();
console.log('Students:', students);

// Update
await collection.updateOne({ roll_no: 101 }, { $set: { marks: 98 } });

// Delete
await collection.deleteOne({ roll_no: 101 });

await client.close();
}

main(); 