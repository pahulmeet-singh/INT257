// now create a new function in a new file called edit-student/page.js that fetches the PUT function from the api/hello/route.js file and allows the user to edit a student's name based on their id. The function should take in the student's id and the new name as parameters, and then send a PUT request to the API with the updated data. After the request is successful, it should update the state variable to reflect the changes.
async function updateStudentName(id, newName) {
    const response = await fetch(`/api/hello/route.js/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name: newName }),
    });

    return response.json();
}

export default function EditStudent() {
    const [studentId, setStudentId] = useState('');
    const [newName, setNewName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateStudentName(studentId, newName);
            setMessage('Student name updated successfully!');
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Student ID"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="New Name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                <button type="submit">Update Name</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}