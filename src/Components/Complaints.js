import React, { useState, useEffect } from "react";
import axios from 'axios';
import Auth from "./Auth";

function Complaints() {
    const [symptoms, setSymptoms] = useState('');
    const [taken_drugs, setTakenDrugs] = useState('');
    const [duration, setDuration] = useState('');
    const [students_id, setStudents_Id] = useState('');
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                const student = Auth.getCurrentUser();
                if (student) {
                    setStudents_Id(student.id);
                    const response = await axios.get(`http://localhost:3000/complaints/${student.id}`);
                    console.log("Response data:", response.data);
                    const fetchedComplaints = response.data.complaints || [];
                    setComplaints(fetchedComplaints);
                    console.log("Complaints state:", fetchedComplaints);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchComplaints();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(students_id);

        if (!symptoms || !duration || !taken_drugs) {
            console.error('Please fill in all the fields');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/complaints', {
                symptoms,
                duration,
                taken_drugs,
            });
            console.log(response.data);

            setComplaints([...complaints, response.data]);

            setSymptoms('');
            setDuration('');
            setTakenDrugs('');

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2 className="profile-heading">Complaints</h2>

            <div className="complaints-container">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group2">
                            <label className="label2">Symptoms:</label>
                            <input
                                type="text"
                                value={symptoms}
                                onChange={e => setSymptoms(e.target.value)}
                                className="input2"
                            />
                        </div>

                        <div className="form-group2">
                            <label className="label2">Duration:</label>
                            <input
                                type="number"
                                value={duration}
                                onChange={e => setDuration(e.target.value)}
                                className="input2"
                            />
                        </div>

                        <div className="form-group2">
                            <label className="label2">Taken any drugs?:</label>
                            <select
                                value={taken_drugs}
                                onChange={(e) => setTakenDrugs(e.target.value)}>
                                className="select"

                                <option value="">Select an option</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>

                        <button type="submit" className="submit-button">Submit Complaint</button>
                    </form>
                </div>

                <div className="complaints-list">
                    <p id="comp"> Find complaints below</p>
                    <ul>
                        {complaints.map((complaint) => (
                            <li key={complaint.id}>
                                <p>Symptoms: {complaint.symptoms}</p>
                                <p>Duration: {complaint.duration}</p>
                                <p>Drugs Taken: {complaint.taken_drugs}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
}


export default Complaints;
