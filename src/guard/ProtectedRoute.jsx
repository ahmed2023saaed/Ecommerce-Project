import React from 'react'
import { Navigate } from 'react-router-dom';
import { LogContext } from '../context/isLogContext';
import { useContext } from 'react';


export default function ProtectedRoute({children}) {
    const {isLoggedIn} = useContext(LogContext) ;
    
    

  return (

    <>
    {isLoggedIn? children :  <Navigate to="/login"/> }
    </>
  )
}
