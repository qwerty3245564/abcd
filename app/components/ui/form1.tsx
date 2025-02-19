"use client";
import { useState } from "react";

type User = {
  name: string;
  email: string;
  number: string;
};

type Props = {
  onUserSubmit: (user: User) => void;
};

export default function UserForm({ onUserSubmit }: Props) {
  const [formData, setFormData] = useState<User>({ name: "", email: "", number: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUserSubmit(formData); // Pass new user data to parent
    setFormData({ name: "", email: "", number: "" }); // Clear form
  };

  return (
    <form onSubmit={handleSubmit} className="bg-blue-300 p-6 rounded-md shadow-md w-96 mt-4">
      <label className="block font-semibold">Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 mt-1 mb-2 border rounded bg-blue-100"
        placeholder="Enter your name"
      />

      <label className="block font-semibold">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 mt-1 mb-2 border rounded bg-blue-100"
        placeholder="Enter your email"
      />

      <label className="block font-semibold">Number:</label>
      <input
        type="number"
        name="number"
        value={formData.number}
        onChange={handleChange}
        required
        className="w-full p-2 mt-1 mb-2 border rounded bg-blue-100"
        placeholder="Enter your number"
      />

      <button type="submit" className="w-full bg-blue-700 text-white py-2 mt-2 rounded hover:bg-blue-900">
        Submit
      </button>
    </form>
  );
}
