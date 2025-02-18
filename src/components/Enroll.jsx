import React, { useState } from "react";

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-md mt-[100px] mb-[100px]">
      <h2 className="text-3xl font-bold text-[#A60000] text-center mb-6">
        Enrollment Form
      </h2>
      <form
  onSubmit={async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5174/enroll-now", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        console.error("Server responded with an error:", result.message);
        alert(`Error: ${result.message}`);
      }
    } catch (err) {
      console.error("Network or server error:", err);
      alert("Failed to submit the form. Please try again.");
    }
  }}
  className="space-y-4"
>
       <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name or Guardian's Name"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB900]"
          />
        </div>


        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB900]"
          />
        </div>


        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB900]"
          />
        </div>


        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="program">
            Program
          </label>
          <select
            id="program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB900]"
          >
            <option value="" disabled>
              Select a program
            </option>
            <option value="Web Development">Aptech Certified Computer Professional</option>
            <option value="Web Development">Aptech Certified Network Specialist</option>
            <option value="Web Development">Web Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="Ethical Hacking">Ethical Hacking</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Aptech Teens Web Development">Aptech Teens Web Development</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write any message or questions you have..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFB900]"
          />
        </div>


        <div>
          <button
            type="submit"
            className="w-full bg-[#A60000] text-white p-3 rounded-lg hover:bg-[#FFB900] transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
      {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
    </div>
  );
};

export default EnrollmentForm;
