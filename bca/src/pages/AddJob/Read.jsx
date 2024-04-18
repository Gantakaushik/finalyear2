import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/get_post/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>  
      <Navbar />
      <div className="container mx-auto p-10  ">
        <h1 className="text-3xl font-bold mb-4 mt-20 "> JOB ID: {id}</h1>
        <Link to="/add_job" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block mb-4">Back</Link>
        {data.map((job) => (
          <div key={job.id} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <p className="text-lg font-bold">ID: {job.id}</p>
              <p className="text-lg font-bold">Job Name: {job.name}</p>
              <p className="text-lg font-bold">Job Type: {job.type}</p>
              <p className="text-lg font-bold">Job Location: {job.loc}</p>
              <p className="text-lg font-bold">Job Experience: {job.exp}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Read;
