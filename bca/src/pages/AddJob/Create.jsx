import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

function Create(){
    const [values, setValues] = useState({
        id:'',
        name:'',
        type:'',
        loc:'',
        exp:''
    })
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault()
        axios.post('/add_job', values)
        .then((res)=>{
            navigate('/add_job')
            console.log(res)
        })
        .catch((err)=>console.log(err))
    }
    return (
        <>  
         <Navbar/>
    <div className="container h-screen w-screen bg-primary flex justify-center items-center">
        <div className="bg-white p-10 pt-0  mb-5 rounded shadow-md w-full max-w-md  mt-36">
            <h3 className="text-2xl  mb-2 text-center font-bold">Add Job</h3>
            <div className="flex justify-end mb-2">
                <Link to='/add_job' className='bg-green-500 hover:bg-green-600 text-white font-bold p-2 rounded inline-block mb-2'>Home</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label htmlFor="id" className="block text-sm font-medium text-gray-700">Job ID</label>
                    <input type="number" name="id" onChange={(e)=>setValues({...values, id: e.target.value})} className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Job Name</label>
                    <input type="text" name="name" onChange={(e)=>setValues({...values, name: e.target.value})} className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">Job Type</label>
                    <input type="text" name="type" onChange={(e)=>setValues({...values, type: e.target.value})} className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="loc" className="block text-sm font-medium text-gray-700">Job Location</label>
                    <input type="text" name="loc" onChange={(e)=>setValues({...values, loc: e.target.value})} className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
                </div>
                <div className="mb-2">
                    <label htmlFor="exp" className="block text-sm font-medium text-gray-700">Job Experience</label>
                    <input type="text" name="exp" onChange={(e)=>setValues({...values, exp: e.target.value})} className="mt-1 p-1 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
                </div>
                <div className="mb-2">
                    <button type="submit" className="btn btn-primary w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
                </div>
            </form>
        </div>
    </div>
    </>
)}

export default Create;
