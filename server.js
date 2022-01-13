const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');



let teachers = [
    { id: 1, name: 'Mr. Smith', subjectId: 1 },
    { id: 2, name: 'Ms. Reed', subjectId: 2 },
    { id: 3, name: 'Mr. Anders', subjectId: 3 }
];

let subjects = [
    { id: 1, name: 'Math' },
    { id: 2, name: 'Reading' },
    { id: 3, name: 'Science' }
];

let students = [
    { id: 1, name: 'Roger Smith', period1SubjectId: 1, period2SubjectId: 2, period3SubjectId: 3 }
    // { id: 2, name: 'Daniel Lucky', period1SubjectId: 2, period2SubjectId: 1, period3SubjectId: 3 },
    // { id: 3, name: 'Amy Sanderson', period1SubjectId: 3, period2SubjectId: 2, period3SubjectId: 1 },
    // { id: 4, name: 'Beth Daniels', period1SubjectId: 1, period2SubjectId: 3, period3SubjectId: 2 },
    // { id: 5, name: 'Daniel Lucky', period1SubjectId: 2, period2SubjectId: 1, period3SubjectId: 3 }
];

app.use(cors({
    origin: '*'
}));

app.use(bodyParser());

app.get('/', (req, res) => {
    res.json({
        message: 'welcome!'
    })
});

app.get('/students', (req, res) => {
    res.json(students)
})

app.post('/students/:studentId', (req, res) => {
    console.log('req.body: ', req.body);
    const studentIndex = students.findIndex(st => st.id == req.params.studentId);
    students[studentIndex] = req.body;

    console.log('students: ', students)

    res.status(201).json({ success: true });
})

app.listen(8080, () => {
    console.log('Server listening on 8080.')
})