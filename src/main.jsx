import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { createBrowserRouter , RouterProvider , Route , createRoutesFromElements } from 'react-router-dom'
import App from './components/Home/Home.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './Layout.jsx'
import ContactForm from './components/Contact/ContactFormSection.jsx'
import ServicesSection from './components/Services/ServicesSection.jsx'
import AboutSection from './components/InfluencerSection/AboutSection.jsx'
import LandingPage from './components/LandingPage.jsx'
import SignupFormBrand from './components/Signup/SignUpBrand.jsx'
import SignupFormPartner from './components/Signup/SignUpPartner.jsx'
import SignupFormagency from './components/Signup/SignUpAgency.jsx'
import SignupFormInfluencer from './components/Signup/SignupFormInfluencer.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='/' element = {<App/>}/>
      <Route path='/Services' element = {<ServicesSection/>}/>
      <Route path='/submit-form' element = {<ContactForm/>}/>
      <Route path='/Influencer' element = {<AboutSection/>}/>
      <Route path='/signup' element = {<LandingPage/>}/>
      <Route path = '/signup/influencer' element = {<SignupFormInfluencer/>}/>
      <Route path = '/signup/brand' element = {<SignupFormBrand/>}/>
      <Route path = '/signup/partner' element = {<SignupFormPartner/>}/>
      <Route path = '/signup/agency' element = {<SignupFormagency/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>    {/*here we are using router */}
  </React.StrictMode>,
)