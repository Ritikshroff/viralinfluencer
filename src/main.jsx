// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './App.css'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/Home/Home.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import ContactForm from './components/Contact/ContactFormSection.jsx'
import ServicesSection from './components/Services/ServicesSection.jsx'
// import AboutSection from './components/InfluencerSection/AboutSection.jsx'
import LandingPage from './components/LandingPage.jsx'
import SignupFormBrand from './components/Signup/SignUpBrand.jsx'
import SignupFormPartner from './components/Signup/SignUpPartner.jsx'
import SignupFormagency from './components/Signup/SignUpAgency.jsx'
import SignupFormInfluencer from './components/Signup/SignupFormInfluencer.jsx'
import LoginForm from './components/Login/LoginForm.jsx'
import DashboardLayout from './components/Dashboard/DashboardLayout.jsx'
import BrandDashboard from './components/Dashboard/BrandDashboard.jsx'
import InfluencerDashboard from './components/Dashboard/InfluencerDashboard.jsx'
import InfluencerNiches from './components/InfluencerSection/InfluencerNiches.jsx'
import reportWebVitals from './reportWebVitals.js'
import ProtectedRoute from './components/ProtectedRoute'
reportWebVitals(console.log);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Public routes with main layout */}
      <Route path='/' element={<Layout />}>
        {/* Keep login and signup routes public */}
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<LandingPage />} />
        <Route path='/signup/influencer' element={<SignupFormInfluencer />} />
        <Route path='/signup/brand' element={<SignupFormBrand />} />
        <Route path='/signup/partner' element={<SignupFormPartner />} />
        <Route path='/signup/agency' element={<SignupFormagency />} />

        {/* Protect all other routes */}
        <Route path='/' element={
            <App />
        } />
        <Route path='/Services' element={
            <ServicesSection />
        } />
        <Route path='/submit-form' element={

            <ContactForm />
        } />
        <Route path='/Influencer' element={
            <InfluencerNiches />
        } />
      </Route>

      {/* Dashboard routes without main layout - all protected */}
      <Route path='/dashboard' element={
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      }>
        <Route path="/dashboard/brand" element={<BrandDashboard />} />
        <Route path="/dashboard/influencer" element={<InfluencerDashboard />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />    {/*here we are using router */}
  </React.StrictMode>,
)