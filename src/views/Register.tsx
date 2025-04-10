import React from 'react'
import logo from '../assets/logo500.png'
import { useState } from 'react';
interface FormData {
    userName: string;
    email: string;
    password: string;
    dob?: string;
    profile_picture?: File | null;
    niveauxSpecialiteId: string;
  }

function Register() {
    const [formData, setFormData] = useState<FormData>({
        userName: '',
        email: '',
        password: '',
        dob: '',
        profile_picture: null,
        niveauxSpecialiteId: '',
      });
    
      const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      ) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
          setFormData({ ...formData, profile_picture: event.target.files[0] });
        } else {
          setFormData({ ...formData, profile_picture: null });
        }
      };
    
      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here (e.g., API call)
        console.log('Form Data:', formData);
      };
    
  return (
    <section className='w-full h-screen text-[#F7F7F5] bg-[#302e2d] p-4'>
        <div className="grid grid-cols-5 w-full h-screen ">
            <div className="col-span-2 bg-[#BD94F4] p-4 h-screen rounded-l-4xl flex justify-center items-center">
                <img src={logo}  />
            </div>
            <div className="col-span-3 bg-[#F7F7F5] text-[#BD94F4] rounded-r-4xl h-fit">
            <div className="flex justify-center items-center h-screen">
                <div className="rounded px-8 pt-6 pb-8 mb-4 w-full ">
                    <h2 className="block text-gray-700 text-2xl font-bold mb-6 text-center">
                    Register
                    </h2>
                    <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="userName"
                        >
                        User Name
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="userName"
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        placeholder="Enter your username"
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                        >
                        Email
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                        >
                        Password
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="dob"
                        >
                        Date of Birth (Optional)
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="dob"
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="profile_picture"
                        >
                        Profile Picture (Optional)
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="profile_picture"
                        type="file"
                        name="profile_picture"
                        onChange={handleFileChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="niveauxSpecialiteId"
                        >
                        Speciality Level
                        </label>
                        <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="niveauxSpecialiteId"
                        name="niveauxSpecialiteId"
                        value={formData.niveauxSpecialiteId}
                        onChange={handleChange}
                        required
                        >
                        <option value="">Select a level</option>
                        <option value="1">Beginner</option>
                        <option value="2">Intermediate</option>
                        <option value="3">Advanced</option>
                        {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        >
                        Register
                        </button>
                        {/* Optional: Add a link to login page */}
                        {/* <a
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        href="#"
                        >
                        Already have an account? Login
                        </a> */}
                    </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Register
