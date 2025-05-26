const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/students', { useNewUrlParser: true, useUnifiedTopology: true });

// Schema
const studentSchema = new mongoose.Schema({
name: String,
department: String,
roll_no: Number,
marks: Number,
});

const Student = mongoose.model('Student', studentSchema);

// Routes
app.get('/students', async (req, res) => {
const students = await Student.find();
res.json(students);
});

app.post('/students', async (req, res) => {
const student = new Student(req.body);
await student.save();
res.send('Student Created');
});

app.put('/students/:id', async (req, res) => {
await Student.findByIdAndUpdate(req.params.id, req.body);
res.send('Student Updated');
});

app.delete('/students/:id', async (req, res) => {
await Student.findByIdAndDelete(req.params.id);
res.send('Student Deleted');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)); 