 import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Form() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  console.log(title,"This is title")

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const blogData = { title, subtitle, description, image };

    try {
      const response = await axios.post(
        "https://687af35babb83744b7ee46ca.mockapi.io/blogs",
        blogData
      );
      if (response.status === 201) {
        alert("Blog created successfully");
        navigate("/");
      } else {
        alert("Failed to create blog");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("An error occurred");
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Create New Blog</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="text"
              placeholder="Subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 rounded p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            ></textarea>
            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <button
              type="submit"
              className="bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition duration-200"
            >
              Create Blog
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form
