import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupFormPartner = () => {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    partnerName: "",
    name: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State for form errors
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.partnerName.trim()) newErrors.partnerName = "Partner name is required.";
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.number.trim()) newErrors.number = "Mobile number is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.password.trim()) newErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "https://viralfluencerbackend.onrender.com/signup/partner", // Replace with actual API URL
        formData
      );
      navigate("/login");
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup For Partner</h2>
        <form onSubmit={handleSubmit}>
          {/* Partner Name */}
          <div className="mb-4">
            <label className="block mb-2">Partner Name</label>
            <input
              type="text"
              name="partnerName"
              value={formData.partnerName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.partnerName && <p className="text-red-500 text-sm">{errors.partnerName}</p>}
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Number */}
          <div className="mb-4">
            <label className="block mb-2">Mobile Number</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="flex-grow px-3 py-2 border rounded-md"
              />
              <button type="button" className="bg-blue-600 text-white px-3 py-2 rounded-md">
                Send OTP
              </button>
            </div>
            {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <div className="flex items-center gap-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="flex-grow px-3 py-2 border rounded-md"
              />
              <button type="button" className="bg-blue-600 text-white px-3 py-2 rounded-md">
                Send OTP
              </button>
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block mb-2">Create Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupFormPartner;
