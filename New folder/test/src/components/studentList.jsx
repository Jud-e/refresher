import Student from "./student";

const StudentList = ({ array }) => {
    return (
        <>
            <ul>
                {array.map((student, index) => (<Student key={index} {...student} />))}
            </ul>
        </>
    );
}

export default StudentList;