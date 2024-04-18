import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar";

function Edit() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    axios.get(`/get_post/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    axios.post(`/edit_job/${id}`, data[0])
      .then((res) => {
        navigate('/add_job');
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>  
     <Navbar/>
    <div className="container mx-auto  px-4  ">
      <h1 className="text-3xl font-bold  mt-24 text-center">Edit Job</h1>
      <Link to="/add_job" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block mb-2">
        Back
      </Link>
      {data.map((job, index) => (
        <form key={index} onSubmit={handleSubmit} className="max-w-sm justify-center " >
          <div className="mb-2">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Job Name
            </label>
            <input
              value={job.name}
              type="text"
              name="name"
              required
              onChange={(e) =>
                setData([{ ...data[0], name: e.target.value }])
              }
              className="form-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
              Job Type
            </label>
            <input
              value={job.type}
              type="text"
              name="type"
              required
              onChange={(e) =>
                setData([{ ...data[0], type: e.target.value }])
              }
              className="form-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="loc" className="block text-gray-700 font-bold mb-2">
              Job Location
            </label>
            <input
              value={job.loc}
              type="text"
              name="loc"
              required
              onChange={(e) =>
                setData([{ ...data[0], loc: e.target.value }])
              }
              className="form-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="exp" className="block text-gray-700 font-bold mb-2">
              Job Experience
            </label>
            <input
              value={job.exp}
              type="text"
              name="exp"
              required
              onChange={(e) =>
                setData([{ ...data[0], exp: e.target.value }])
              }
              className="form-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-2">
            <button type="submit" className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Save
            </button>
          </div>
        </form>
      ))}
    </div>
    </>
  );
}

export default Edit;
