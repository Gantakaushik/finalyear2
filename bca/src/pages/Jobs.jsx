import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Jobs_cards from "../components/jobs/Jobs_cards"; // Import Jobs_cards component
import Filter_Nav from "../components/jobs/Filter_Nav";
function Jobs() {
    const [data, setData] = useState([]);
    const [deleted, setDeleted] = useState(true);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [deleted]);

    useEffect(() => {
        setFilteredData(data); // Initialize filteredData with all data
    }, [data]);

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

    const handleFilter = (selectedDepartment, selectedLocation) => {
        let filtered = data;

        if (selectedDepartment) {
            filtered = filtered.filter(job => job.type === selectedDepartment);
        }

        if (selectedLocation) {
            filtered = filtered.filter(job => job.loc === selectedLocation);
        }

        setFilteredData(filtered);
    };

    return (
        <>  
        <Navbar/>
        <Filter_Nav onFilter={handleFilter}/>
        <div className="container mx-auto bg-primary h-screen overflow-scroll">
            <h3 className="text-white text-center py-4 text-3xl">JOBS</h3>
            <div className="flex justify-end mb-4">
            </div>
            {filteredData.length === 0 ? (
                <div className="text-red-400 text-center">No results found.</div>
            ) : (
                <div className="grid grid-cols-1 gap-4 w-3/4 ml-24">
                    {filteredData.map((job) => (
                        <div key={job.id}>
                            <Jobs_cards
                                jobName={job.name}
                                jobType={job.type}
                                location={job.loc}
                                experience={job.exp}
                                jobID={job.id}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
        </>
    );
}

export default Jobs;
