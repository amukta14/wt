import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
const [students, setStudents] = useState([]);
const [form, setForm] = useState({ name: '', department: '', roll_no: '', marks: '' });

useEffect(() => {
fetchStudents();
}, []);

const fetchStudents = async () => {
const res = await axios.get('http://localhost:5000/students');
setStudents(res.data);
};

const createStudent = async () => {
await axios.post('http://localhost:5000/students', form);
fetchStudents();
};

return (
<div style={{ padding: '20px' }}>
<h2>Student Management (MERN)</h2>

<input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
<input placeholder="Department" onChange={e => setForm({...form, department: e.target.value})} />
<input placeholder="Roll No" onChange={e => setForm({...form, roll_no: e.target.value})} />
<input placeholder="Marks" onChange={e => setForm({...form, marks: e.target.value})} />
<button onClick={createStudent}>Add Student</button>

<ul>
{students.map(s => (
<li key={s._id}>{s.name} ({s.roll_no}) - {s.department} - {s.marks} marks</li>
))}
</ul>
</div>
);
}

export default App; 