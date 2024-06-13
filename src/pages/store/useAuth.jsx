import React, { useContext } from 'react'
import AuthContext from './AuthContext';
import AuthProvider from './AuthProvider';

const useAuth = () => {
  return (
    useContext(AuthContext)
  )
}

export default useAuth