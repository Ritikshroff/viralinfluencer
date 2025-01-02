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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='/' element = {<App/>}/>
      <Route path='/Services' element = {<ServicesSection/>}/>
      <Route path='/submit-form' element = {<ContactForm/>}/>
      <Route path='/Influencer' element = {<AboutSection/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>    {/*here we are using router */}
  </React.StrictMode>,
)