import React from 'react'
import Form from '../Form'


const brandFields = [
    {
      name: "companyname",
      label: "Company Name",
      type: "text",
      placeholder: "Entre Your Company Name",
      required: true,
    },
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Entre Your Name",
      required: true,
    },
    {
      name: "email",
      label: "Official Email",
      type: "email",
      placeholder: "Entre Your official email",
      required: true,
    },
    {
      name: "number",
      label: "Number",
      type: "number",
      placeholder: "Entre Your Number",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "Password",
      placeholder: "Enter Password",
      required: true,
    },
    {
      name: "repassword",
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