// Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";

function Home() {
    const [data, setData] = useState([]);
    const [deleted, setDeleted] = useState(true);

    useEffect(() => {
        fetchData();
    }, [deleted]);

    const fetchData = () => {
        axios.get('/posts')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.log(err));
    };

    const handleDelete = (id) => {
        axios.delete(`/delete/${id}`)
            .then((res) => {
                // Filter out the deleted job from the data array
                setData(data.filter(job => job.id !== id));
            })
            .catch((err) => console.log(err));
    };

    const handleAddJob = () => {
        // After adding a new job, setDeleted to true to trigger data fetching
        setDeleted(true);
    };

    return (
        <>  
        <Navbar/>
        <div className="container mx-auto bg-primary h-screen">
            <h3 className="text-white text-center py-4 text-3xl">JOBS</h3>
            <div className="flex justify-end mb-4">
                <Link className="bg-green-500 text-white px-4 py-2 mt-10 mr-5 rounded hover:bg-green-600" to='/create'>Add New Job</Link>
            </div>
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="px-4 py-2">Job-ID</th>
                        <th className="px-4 py-2">Job-Name</th>
                        <th className="px-4 py-2">Job-Type</th>
                        <th className="px-4 py-2">Job-location</th>
                        <th className="px-4 py-2">Job-experience</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((job) => (
                        <tr key={job.id} className="bg-white text-gray-800">
                            <td className="px-4 py-2 text-center">{job.id}</td>
                            <td className="px-4 py-2 text-center">{job.name}</td>
                            <td className="px-4 py-2 text-center">{job.type}</td>
                            <td className="px-4 py-2 text-center">{job.loc}</td>
                            <td className="px-4 py-2 text-center">{job.exp}</td>
                            <td className="px-4 py-2 text-center">
                                <Link className='bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600' to={`/read/${job.id}`}>Read</Link>
                                <Link className='bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600' to={`/edit/${job.id}`}>Edit</Link>
                                <button onClick={() => handleDelete(job.id)} className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default Home;
