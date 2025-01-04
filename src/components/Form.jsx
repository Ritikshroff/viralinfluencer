import React, { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import ButtonContainer from "../components/ButtonContainer";
import { Link } from "react-router-dom";

const Form = ({ formTitle, fields = [] }) => {
  const [formData, setFormData] = useState({});
  const [captchaToken, setCaptchaToken] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please complete the captcha.");
      return;
    }
    console.log("Form Submitted", formData);
    // Perform API call here
  };

  const onVerifyCaptcha = (token) => {
    setCaptchaToken(token);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold">{formTitle}</h2>
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          {fields.length > 0 ? (
            fields.map((field) => (
              <div key={field.name} className="mb-4">
                <label className="block text-gray-700 mb-1" htmlFor={field.name}>
                  {field.label}
                </label>
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    id={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    required={field.required}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  >
                    {field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    id={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    required={field.required}
                    className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            ))
          ) : (
            <p className="text-red-500 text-center">
              No fields are configured for this form.
            </p>
          )}
          <div className="mb-4">
            <HCaptcha
              sitekey="your-hcaptcha-site-key"
              onVerify={onVerifyCaptcha}
            />
          </div>
          <ButtonContainer type="submit" name="Sign Up" />
        </form>
      </div>
    </section>
  );
};

export default Form;
