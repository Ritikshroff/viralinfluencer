import React from 'react'
import Form from '../Form'


const brandFields = [
    {
      name: "companyName",
      label: "Company Name",
      type: "text",
      placeholder: "Your Company Name",
      required: true,
    },
    {
      name: "Fullname",
      label: "Full Name",
      type: "text",
      placeholder: "Your Name",
      required: true,
    },
    {
      name: "Email",
      label: "Official Email",
      type: "email",
      placeholder: "Your Company email",
      required: true,
    },
    {
      name: "Number",
      label: "Number",
      type: "number",
      placeholder: "Your Number",
      required: true,
    },
    {
      name: "Password",
      label: "Password",
      type: "Password",
      placeholder: "Enter Password",
      required: true,
    },
    {
      name: "RePassword",
      label: "Password",
      type: "Password",
      placeholder: " Re Enter Password",
      required: true,
    },
  ];

function SignupFormBrand() {
  return (
<>
<Form formTitle="Brand Signup" fields={brandFields}/>
</>
  )
}

export default SignupFormBrand