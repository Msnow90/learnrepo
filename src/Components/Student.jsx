import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { update, set } from '../reducers/studentReducer';


export default ({ student, onSubmit }) => {

    const existingStudent = useSelector((state) => state.student);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(set(student));
    }, []);

    const onChangeHandler = (e) => {
        dispatch(update({
            ...existingStudent,
            [e.target.name]: e.target.value
        }))
    }

    const submitStudentModification = () => {
        onSubmit(existingStudent.id, existingStudent);
    }

    return (
        <div>
            <input name="name" value={existingStudent.name} onChange={onChangeHandler} />
            <button onClick={submitStudentModification}>Submit</button>
        </div>
    )

}