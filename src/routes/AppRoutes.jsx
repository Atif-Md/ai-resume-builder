import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Dashboard from '../pages/dashboard/Dashboard';
import ResumeBuilder from '../pages/resumeBuilder/ResumeBuilder';
import ResumePreview from '../pages/resumePreview/ResumePreview';
import Templates from '../pages/templates/Templates';
import Profile from '../pages/profile/Profile';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/resume-builder" element={<ResumeBuilder />} />
                <Route path="/resume-preview" element={<ResumePreview />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;