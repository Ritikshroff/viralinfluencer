// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios'

// const LoginForm = () => {
//   const navigate = useNavigate();

//   // State for form data
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   // State for form errors
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.email.trim()) newErrors.email = "Email is required.";
//     if (!formData.password.trim()) newErrors.password = "Password is required.";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };



//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     try {
//       const response = await axios.post(
//         "https://viralfluencerbackend.onrender.com/login",
//         formData
//       );
//       navigate("/dashboard");
//     } catch (error) {
//       console.error("Error during signup:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
//         <form onSubmit={handleSubmit}>
//           {/* Email */}
//           <div className="mb-4">
//             <label className="block mb-2 text-sm font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your email"
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//           </div>

//           {/* Password */}
//           <div className="mb-4">
//             <label className="block mb-2 text-sm font-medium">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Enter your password"
//             />
//             {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
//           </div>

//           <div className="flex justify-between items-center mb-6">
//             {/* Remember Me */}
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 className="mr-2"
//                 id="rememberMe"
//                 name="rememberMe"
//               />
//               <label htmlFor="rememberMe" className="text-sm">Remember me</label>
//             </div>

//             {/* Forgot Password */}
//             <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
//               Forgot Password?
//             </a>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Login
//           </button>
//         </form>

//         <div className="text-center mt-6">
//           <p className="text-sm">
//             Don't have an account?{" "}
//             <a href="/signup" className="text-blue-600 hover:text-blue-700">
//               Sign Up
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const LoginForm = () => {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State for form errors
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.password.trim()) newErrors.password = "Password is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "https://viralfluencerbackend.onrender.com/login",
        formData
      );
      
      // Assuming the backend returns the token in the 'data.token'
      const { token } = response.data;

      // Store the token in localStorage
      if (token) {
        localStorage.setItem('authToken', token);  // Save token to localStorage
        navigate("/dashboard");  // Redirect to the dashboard page after successful login
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError("Invalid email or password."); // Set error message on login failure
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Login Error Message */}
          {loginError && <p className="text-red-500 text-sm mb-4">{loginError}</p>}

          <div className="flex justify-between items-center mb-6">
            {/* Remember Me */}
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                id="rememberMe"
                name="rememberMe"
              />
              <label htmlFor="rememberMe" className="text-sm">Remember me</label>
            </div>

            {/* Forgot Password */}
            <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:text-blue-700">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
