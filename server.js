import express from 'express';
import { MongoClient } from 'mongodb';
import pkg from 'body-parser';
const { json } = pkg;
import cors from 'cors';
// import AptechEnrollCollection from './mongo';

const app = express();
const PORT = 5174;

// Middleware
app.use(cors());
app.use(json());

// The Mongo itself
import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/AptechDataBase")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const EnrollSchema = new mongoose.Schema({
    name:{
        type:String
    },
    phone:{
      type:String
    },
    email:{
        type:String
    },
    program:{
        type:String
    },
    message:{
        type:String
    }
})

const AptechEnrollCollection = new mongoose.model('AptechEnrollCollection',EnrollSchema)

// the sending......
app.post('/enroll-now', async (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    program: req.body.program,
    message: req.body.message,
  };

  try {
    const existing = await AptechEnrollCollection.findOne({ name: req.body.name });

    if (existing) {
      if (existing.program === req.body.program) {
        return res.status(400).json({ message: "You have already registered for this program." });
      } else {
        await AptechEnrollCollection.insertOne(data);
        return res.status(201).json({ message: "Enrolled successfully!" });
      }
    } else {
      await AptechEnrollCollection.insertOne(data);
      return res.status(201).json({ message: "Enrolled successfully!" });
    }
  } catch (err) {
    console.error("Error saving data:", err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});



// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
