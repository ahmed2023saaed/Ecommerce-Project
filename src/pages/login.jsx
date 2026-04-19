import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { Navigate, useNavigate } from 'react-router-dom'
import Home from './home'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { LogContext } from '../context/isLogContext'
import { useContext } from 'react'


export default function Login() {
    const {isLoggedIn,setIsLoggedIn} = useContext(LogContext)
    const navigate = useNavigate()
    const Schema = Yup.object({
        fname: Yup.string().required("first name is required"),
        password: Yup.string().min(6, "min 6 characters").required("password is required")
    })

    const {values, handleChange, handleSubmit, errors} = useFormik({

        initialValues: {
            fname:"",
            password:""
        },
        onSubmit: ()=>{
            setIsLoggedIn(true)
            navigate("/shop")
        },
        validationSchema: Schema
    })


  return (

<>
<div className='bg-linear-to-br from-slate-100 to-slate-200 h-screen flex items-center '>

<div className='flex flex-col items-center gap-6 my-25 py-5 px-30 rounded-4xl bg-amber-50 w-fit mx-auto hover:shadow-2xl'>

    <h2 className='text-5xl font-bold my-10 mb-3'>Login</h2>

    <div className=''>
    <i className="fa-regular fa-user"></i>
    <input className='border-b p-2' placeholder= {` username`}  type="text" id='fname' value={values.fname} name='fname' onChange={handleChange}  />
    </div>
    {errors.fname && <p className='text-red-600'>{errors.fname}</p>}

    <div className='  '>
    <i className="fa-solid fa-lock"></i>
    <input className='border-b p-2' placeholder='password' type="text" id='password' value={values.password} name='password' onChange={handleChange}  />
    </div>
    {errors.password && <p className='text-red-600'>{errors.password}</p>}
    <button className='hover:bg-white hover:border-blue-500 border hover:text-blue-500 w-60 py-1 rounded-full text-lg font-bold text-white mt-2 bg-blue-500' type='button' onClick={handleSubmit} >login</button>
</div>
</div>
</>

)
}
