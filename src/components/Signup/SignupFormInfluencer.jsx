import React from 'react'
import Form from '../Form'


const brandFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Entre Your Full Name",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Entre Your Email",
      required: true,
    },
    {
      name: "number",
      label: "Number",
      type: "number",
      placeholder: "Your Number",
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

function SignupFormInfluencer() {
  return (
<>
<Form formTitle="Influencer Signup" fields={brandFields}/>
</>
  )
}

export default SignupFormInfluencer