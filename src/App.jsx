import { useState, useEffect } from 'react'
import { Link, useNavigate, Navigate } from "react-router-dom";
import reactLogo from './assets/react.svg'
// import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Private Routes
import PrivateRoute from './PrivateRoute';

// Authentication
import RequireAuth from './pages/store/RequireAuth';

// Global Page
import Beranda from './pages/layouts/Beranda/Beranda';
import Loker from './pages/layouts/Lowker/Loker';
import Login from './pages/Login';
import Register from './pages/Register';

import NotFound from './pages/NotFound';

// Calon Karyawan
// import Dashboard from './pages/Dashboard';
import DashCakar from './pages/components/Cakar/Dash/DashCakar';
// import DataDiri from './pages/components/Cakar/Data/DataDiri';
import DataCakar from './pages/components/Cakar/Data/DataCakar';
import Lowongan from './pages/components/Cakar/Vacancy/Lowongan';
import Kontak from './pages/components/Cakar/Data/Kontak/Kontak';
import PendidikanFormal from './pages/components/Cakar/Data/Pendidikan/PendidikanFormal';

// Karyawan

// Admin HRD
import Dash from './pages/components/Admin/Dash/Dash';

// Administrator

function App() {
  // const [count, setCount] = useState(0)
  const [token, setToken] = useState('');
  const [role, setRole] = useState('');

  return (
    <Router>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/home" />}/> */}
          {/* <Route path="/home" element={<Beranda />}/> */}
          <Route path="/" element={<Beranda />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/loker/:id" element={<Loker />} />

          {/* Calon Karyawan */}
          <Route path="/dash" element={<DashCakar />} />
          <Route path="/vacancy" element={<Lowongan />} />
          <Route path="/datadiri" element={<DataCakar />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/pendidikanformal" element={<PendidikanFormal />} />
          {/* <PrivateRoute path="/test" roles={["2"]} component={<PendidikanFormal/>}/> */}
          {/* <Route path="/test" element={<PendidikanFormal />} /> */}

          {/* Admin */}
          <Route path="/home" element={<Dash />} />

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  )
}

export default App
