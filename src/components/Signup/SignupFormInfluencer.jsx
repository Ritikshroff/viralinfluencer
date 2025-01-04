import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupFormInfluencer = () => {
  const navigate = useNavigate();

  // State for form data
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
  });

  // State for form errors
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLanguageChange = (e) => {
    const options = Array.from(e.target.selectedOptions).map((option) => option.value);
    setFormData({ ...formData, language: options });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.number.trim()) newErrors.number = "Mobile number is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.dob) newErrors.dob = "Date of birth is required.";
    if (!formData.genre) newErrors.genre = "Genre is required.";
    if (formData.language.length === 0) newErrors.language = "Select at least one language.";
    if (!formData.location.trim()) newErrors.location = "Location is required.";
    if (!formData.instagram.trim()) newErrors.instagram = "Instagram handle is required.";
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
        "https://viralfluencerbackend.onrender.com/signup/influencer",
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
        <h2 className="text-2xl font-bold mb-6 text-center">Signup For Influencer</h2>
        <form onSubmit={handleSubmit}>
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

          {/* Gender */}
          <div className="mb-4">
            <label className="block mb-2">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
          </div>

          {/* DOB */}
          <div className="mb-4">
            <label className="block mb-2">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
          </div>

          {/* Genre */}
          <div className="mb-4">
            <label className="block mb-2">Genre</label>
            <select
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Select Genre</option>
              <option value="tech">Tech</option>
              <option value="fashion">Fashion</option>
              <option value="lifestyle">Lifestyle</option>
            </select>
            {errors.genre && <p className="text-red-500 text-sm">{errors.genre}</p>}
          </div>

          {/* Language */}
          <div className="mb-4">
            <label className="block mb-2">Languages Known</label>
            <select
              name="language"
              multiple
              value={formData.language}
              onChange={handleLanguageChange}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="other">Other</option>
            </select>
            {errors.language && <p className="text-red-500 text-sm">{errors.language}</p>}
          </div>

          {/* Location */}
          <div className="mb-4">
            <label className="block mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
          </div>

          {/* Instagram */}
          <div className="mb-4">
            <label className="block mb-2">Instagram Handle</label>
            <input
              type="text"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.instagram && <p className="text-red-500 text-sm">{errors.instagram}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block mb-2">Password</label>
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

export default SignupFormInfluencer;
