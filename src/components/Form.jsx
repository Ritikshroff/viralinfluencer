import React, { useState } from "react";
import axios from "axios";
import ButtonContainer from "../components/ButtonContainer";
import { Link } from "react-router-dom";

const Form = ({ formTitle }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    gender: "",
    dob: "",
    genre: "",
    language: [],
    location: "",
    instagram: "",
    password: "",
    confirmPassword: "",
    brandName: "",
    industryType: "",
    agencyName: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.replace(/([A-Z])/g, " $1")} is required.`;
      }
    });

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    try {
      const response = await axios.post(
        "https://viralfluencerbackend.onrender.com/signup/influencer",
        formData
      );
      alert("Signup successful!");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
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
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          {/* Number Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <div className="flex">
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Send OTP
              </button>
            </div>
            {errors.number && <p className="text-red-500">{errors.number}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <div className="flex">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Send OTP
              </button>
            </div>
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          {/* Dropdown Fields */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500">{errors.gender}</p>}
          </div>

          {/* Password Fields */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <ButtonContainer type="submit" name="Sign Up" />
        </form>
      </div>
    </section>
  );
};

export default Form;




/*
name
number (give a button of send otp)
email (give a button of send otp)
gendre (dropdown)
dob
gener (dropdown)
language (dropdown , multiselect)
location
instagram
create password
confirm password
brand name
industry type (dropdown)
agency name

*/