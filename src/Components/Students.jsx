import { useGetStudentsQuery, useUpdateStudentMutation } from '../serverstate/students';

import Student from './Student';

export default () => {

    const { data = [], error, isLoading } = useGetStudentsQuery();
    const [ updateStudent, result ] = useUpdateStudentMutation();

    const onStudentChangeSubmit = (studentId, updatedStudent) => updateStudent({ studentId, updatedStudent });

    return (
        <>
        <h1>Students from Redux Toolkit Query: </h1>
            {
                data.map(student => <Student key={student.id} student={student} onSubmit={onStudentChangeSubmit}/>)
            }
        </>
    )
}